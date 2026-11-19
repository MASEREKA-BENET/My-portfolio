"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function AnimatedFooterBottom() {
  const copyrightRef = useRef<HTMLSpanElement>(null);
  const destinationRef = useRef<HTMLSpanElement>(null);
  const [travel, setTravel] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const measure = () => {
      const copyright = copyrightRef.current?.getBoundingClientRect();
      const destination = destinationRef.current?.getBoundingClientRect();
      if (copyright && destination) setTravel(Math.max(0, destination.left - copyright.right - 12));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (copyrightRef.current?.parentElement) observer.observe(copyrightRef.current.parentElement);
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  return <div className="footer-bottom"><motion.span ref={copyrightRef} animate={reduceMotion ? undefined : { x: [0, travel, 0] }} transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}>© {new Date().getFullYear()} Masereka Benet. Made with intention in Kampala.</motion.span><span ref={destinationRef}>DESIGNED TO KEEP GROWING <i>✳</i></span></div>;
}
