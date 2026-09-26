import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';

import { CONTACT_FORM, SITE } from '../data/site';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_FILL_TIME_MS = 1500;
const SEND_ANOTHER_DELAY_MS = 600;

const EMPTY_VALUES = { name: '', email: '', subject: '', message: '' };

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Please add your name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'That name looks too short.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please add your email.';
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'That email address does not look right.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please add a subject.';
  } else if (values.subject.trim().length < 3) {
    errors.subject = 'That subject looks too short.';
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us a little about the project.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'A bit more detail helps us reply usefully.';
  }

  return errors;
}

function describeFailure(status, payload) {
  const messages = Array.isArray(payload?.errors) ? payload.errors : [];
  const summary = messages
    .map((entry) => (typeof entry === 'string' ? entry : entry?.message))
    .filter(Boolean);

  if (summary.length > 0) {
    return summary.join(' ');
  }

  if (typeof payload?.message === 'string' && payload.message.trim()) {
    return payload.message.trim();
  }

  if (status === 404) {
    return 'This form is not connected to an inbox yet. Please email us directly.';
  }

  if (status === 429) {
    return 'Too many messages from this device. Please email us directly.';
  }

  if (status >= 500) {
    return 'Our form service is having trouble right now. Please email us directly.';
  }

  return 'We could not send your message. Please email us directly.';
}

function splitServerErrors(payload) {
  const entries = Array.isArray(payload?.errors) ? payload.errors : [];
  const fieldErrors = {};
  const general = [];

  for (const entry of entries) {
    if (!entry) continue;

    if (entry.field && entry.message) {
      fieldErrors[entry.field] = entry.message;
    } else if (entry.message) {
      general.push(entry.message);
    }
  }

  return { fieldErrors, general };
}

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-[\'Bebas_Neue\'] text-lg tracking-[0.03em] text-white outline-none transition-colors duration-300 placeholder:text-white/40 hover:border-white/20 focus:border-[#f5b8c4]/70 focus:bg-white/10';

const invalidClass = 'border-[#fcd34d]/70 bg-[#fcd34d]/5';

const errorClass =
  'mt-1.5 flex items-center gap-1.5 font-[\'Bebas_Neue\'] text-lg tracking-[0.04em] text-[#fcd34d]';

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [errors, setErrors] = useState({});
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [formError, setFormError] = useState('');
  const [canSendAnother, setCanSendAnother] = useState(false);

  const submittingRef = useRef(false);
  const fieldRefs = useRef({});
  const openedAtRef = useRef(0);

  useEffect(() => {
    openedAtRef.current = Date.now();
  }, []);

  useEffect(() => {
    if (status !== 'success') return undefined;

    const timer = setTimeout(() => setCanSendAnother(true), SEND_ANOTHER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [status]);

  const isSubmitting = status === 'submitting';

  function showSuccess() {
    setCanSendAnother(false);
    setStatus('success');
  }

  function updateField(name, value) {
    setValues((previous) => ({ ...previous, [name]: value }));

    setErrors((previous) => {
      if (!previous[name]) return previous;

      const next = { ...previous };
      delete next[name];
      return next;
    });
  }

  function reset() {
    setValues(EMPTY_VALUES);
    setErrors({});
    setHoneypot('');
    setFormError('');
    setStatus('idle');
    openedAtRef.current = Date.now();
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submittingRef.current || isSubmitting) return;

    setFormError('');

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    // Answer scrapers with a success state so the trap stays unadvertised, and
    // skip the request. Formspree filters the same submission server-side.
    const looksAutomated =
      honeypot.trim() !== '' || Date.now() - openedAtRef.current < MIN_FILL_TIME_MS;

    if (looksAutomated) {
      showSuccess();
      return;
    }

    submittingRef.current = true;
    setStatus('submitting');

    const name = values.name.trim();
    const email = values.email.trim();

    try {
      const response = await fetch(CONTACT_FORM.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject: values.subject.trim(),
          message: values.message.trim(),
          _replyto: email,
          _subject: `New enquiry from ${name} — ${values.subject.trim()}`,
          _template: 'table',
          _captcha: 'false',
          _gotcha: '',
          _honey: '',
        }),
      });

      const payload = await response.json().catch(() => null);

      // FormSubmit stores submissions made before the destination inbox
      // confirms its one-time activation link and delivers them once activated,
      // so from the visitor's point of view that response is a success.
      const activationPending =
        payload?.success === 'false' &&
        typeof payload?.message === 'string' &&
        /activat/i.test(payload.message);

      if (!response.ok || (payload?.success === 'false' && !activationPending)) {
        const { fieldErrors, general } = splitServerErrors(payload);

        if (Object.keys(fieldErrors).length > 0) {
          setErrors((previous) => ({ ...previous, ...fieldErrors }));
        }

        setFormError(general.join(' ') || describeFailure(response.status, payload));
        setStatus('error');
        return;
      }

      showSuccess();
    } catch {
      setFormError(
        'We could not reach the form service. Check your connection, or email us directly.',
      );
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass rounded-2xl border border-[#f5b8c4]/30 p-6"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto size-7 text-[#f5b8c4]" aria-hidden="true" />

        <p className="mt-4 font-['Bebas_Neue'] text-xl uppercase tracking-[0.12em] text-white">
          Message sent
        </p>

        <p className="mt-2 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-white/70">
          Thanks for reaching out. {SITE.responseTime} If it is urgent, call{' '}
          <a
            href={`tel:${SITE.phoneHref}`}
            className="transition-colors duration-300 hover:text-[#db364e]"
          >
            {SITE.phone}
          </a>
          .
        </p>

        <button
          type="button"
          onClick={reset}
          disabled={!canSendAnother}
          className="mt-5 rounded-full border border-white/40 px-5 py-2.5 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-white/40 disabled:hover:bg-transparent"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      aria-labelledby="contact-form-heading"
      action={CONTACT_FORM.fallbackAction}
      method="POST"
      className="liquid-glass relative rounded-2xl border border-white/10 p-6"
    >
      <p
        id="contact-form-heading"
        className="font-['Bebas_Neue'] text-lg uppercase tracking-[0.12em] text-[#f5b8c4]"
      >
        Start a project
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {FIELDS.map((field) => {
          const errorId = `contact-${field.name}-error`;
          const hasError = Boolean(errors[field.name]);

          return (
            <div key={field.name}>
              <label htmlFor={`contact-${field.name}`} className="sr-only">
                {field.label}
              </label>

              <input
                id={`contact-${field.name}`}
                name={field.name}
                ref={(node) => {
                  fieldRefs.current[field.name] = node;
                }}
                type={field.type}
                autoComplete={field.autoComplete}
                placeholder={field.label}
                value={values[field.name]}
                onChange={(event) => updateField(field.name, event.target.value)}
                aria-invalid={hasError}
                aria-describedby={hasError ? errorId : undefined}
                className={`${fieldClass} ${hasError ? invalidClass : ''}`}
              />

              {hasError && (
                <p id={errorId} className={errorClass}>
                  <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
                  {errors[field.name]}
                </p>
              )}
            </div>
          );
        })}

        <div>
          <label htmlFor="contact-message" className="sr-only">
            Message
          </label>

          <textarea
            id="contact-message"
            ref={(node) => {
              fieldRefs.current.message = node;
            }}
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="What are you building, and when does it need to be live?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            className={`${fieldClass} min-h-28 resize-y ${
              errors.message ? invalidClass : ''
            }`}
          />

          {errors.message && (
            <p id="contact-message-error" className={errorClass}>
              <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Off-screen rather than display:none, so scrapers still fill it. */}
      <div className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0">
        <label htmlFor="contact-company">Company website</label>
        <input
          id="contact-company"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {formError && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-xl border border-[#fcd34d]/40 bg-[#fcd34d]/10 px-4 py-2.5 font-['Bebas_Neue'] text-lg leading-snug tracking-[0.03em] text-[#fcd34d]"
        >
          <AlertCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          {formError}
        </p>
      )}

      <div className="mt-5 text-left">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 rounded-full border border-[#b02a3d] bg-[#b02a3d] px-5 py-2.5 font-['Bebas_Neue'] text-sm uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#922235] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-[#b02a3d]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              <Send className="size-3.5" aria-hidden="true" />
              Send
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
