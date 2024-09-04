import React, { useState, useRef, useEffect } from "react";

const CountUp = ({ start = 0, end, timer = 250 }) => {
  const [state, setState] = useState(start);
  const ref = useRef(start);
  const elementRef = useRef(null);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        updateCounterState();
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1, // Adjust threshold as needed
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, start]);

  return (
    <div ref={elementRef}>
      {state}
      <sup className="text-pink-500">+</sup>
    </div>
  );
};

export default CountUp;
