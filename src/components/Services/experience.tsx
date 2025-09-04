import { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../app/Context";
import "../../styles/components/Service/experience.scss";

export type experienceProps = {
  number: number;
  year: string;
  work: string;
  repeat?: boolean;
  durationMs?: number;
};

export default function Experience({
  number,
  year,
  work,
  repeat,
  durationMs = 1500,
}: experienceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const runningRef = useRef(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setCount(number);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!runningRef.current) startCounting();
        } else if (repeat) {
          setCount(0);
          runningRef.current = false;
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();

    function startCounting() {
      runningRef.current = true;
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / durationMs);
        const p = 1 - Math.pow(1 - t, 3);
        const next = Math.max(0, Math.min(number, Math.round(p * number)));
        setCount(next);
        if (next < number) requestAnimationFrame(step);
        else runningRef.current = false;
      };
      requestAnimationFrame(step);
    }
  }, [number, repeat, durationMs]);

  return (
    <div className="experience">
      <div className="experience__achievement" ref={ref}>
        <div
          className="experience__achievement__circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          {count} +
        </div>
        <p style={{ color: darkMode ? "white" : "" }}>{year}</p>
        <p>{work}</p>
      </div>
    </div>
  );
}
