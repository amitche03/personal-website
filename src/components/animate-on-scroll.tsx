"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale"
    | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  threshold = 0.1,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const baseStyles: React.CSSProperties = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${delay}ms`,
  };

  const animations = {
    "fade-up": {
      initial: { opacity: 0, transform: "translateY(30px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-down": {
      initial: { opacity: 0, transform: "translateY(-30px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-left": {
      initial: { opacity: 0, transform: "translateX(-30px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-right": {
      initial: { opacity: 0, transform: "translateX(30px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    scale: {
      initial: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    fade: {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  const currentAnimation = animations[animation];
  const animationStyles = isVisible
    ? currentAnimation.visible
    : currentAnimation.initial;

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyles, ...animationStyles }}
    >
      {children}
    </div>
  );
}
