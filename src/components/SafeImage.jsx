import { useState } from 'react';

export default function SafeImage({
  src,
  alt = '',
  className = '',
  fallbackClassName = '',
  ...props
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className={
          fallbackClassName ||
          `bg-[linear-gradient(135deg,#1a1a2e_0%,#7b2233_55%,#db364e_100%)] ${className}`.trim()
        }
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
