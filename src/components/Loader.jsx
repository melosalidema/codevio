import { useEffect, useRef, useState } from "react";
import "./Loader.css"; // your CSS file

const initialCurve = "M0 0 L0 100 Q50 120 100 100 L100 0 Z"; // adjust to your actual path

export default function Loader() {
  const loader = useRef(null);
  const [path, setPath] = useState("");

  const duration = 600;
  let start;

  useEffect(() => {
    setPath(initialCurve);
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 500);
  }, []);

  const animate = (timestamp) => {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    loader.current.style.top =
      easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
    if (elapsed < duration) {
      requestAnimationFrame(animate);
    }
  };

  const easeOutQuad = (time, start, end, duration) => {
    return -end * ((time /= duration) * (time - 2)) + start;
  };

  const loaderHeight = () => {
    const loaderBounds = loader.current.getBoundingClientRect();
    return loaderBounds.height;
  };

  return (
    <div ref={loader} className="loader">
      <svg>
        <path d={path} />
      </svg>
    </div>
  );
}