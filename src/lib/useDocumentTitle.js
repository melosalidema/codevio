import { useEffect } from 'react';

import { SITE_URL } from '../data/site';

const setMetaContent = (selector, value) => {
  const element = document.querySelector(selector);
  if (element && value) element.setAttribute('content', value);
};

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    if (!title) return undefined;

    const previousTitle = document.title;
    const documentTitle = title.includes('Codevio') ? title : `${title} — Codevio`;
    document.title = documentTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content') ?? '';
    if (description && metaDescription) metaDescription.setAttribute('content', description);

    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute('href') ?? '';
    const url = `${SITE_URL}${window.location.pathname}`;
    if (canonical) canonical.setAttribute('href', url);

    setMetaContent('meta[property="og:title"]', documentTitle);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[name="twitter:title"]', documentTitle);
    if (description) {
      setMetaContent('meta[property="og:description"]', description);
      setMetaContent('meta[name="twitter:description"]', description);
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription) metaDescription.setAttribute('content', previousDescription);
      if (canonical) canonical.setAttribute('href', previousCanonical);
    };
  }, [title, description]);
}
