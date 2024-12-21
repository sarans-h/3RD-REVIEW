"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  words: string[]; // List of words to display
  className?: string;
  duration?: number;
  delay?: number;
  pauseBetweenWords?: number; // Pause duration between words
  as?: React.ElementType;
  startOnView?: boolean;
}

export default function TypingAnimation({
  words,
  className,
  duration = 100,
  delay = 0,
  pauseBetweenWords = 1000, // 1 second default pause
  as: Component = "div",
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, startOnView]);

  useEffect(() => {
    if (!started || words.length === 0) return;

    let charIndex = 0;
    const word = words[currentWordIndex];
    const typingEffect = setInterval(() => {
      if (charIndex < word.length) {
        setDisplayedText(word.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingEffect);
        setTimeout(() => {
          setDisplayedText(""); // Clear text before next word
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
        }, pauseBetweenWords);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [currentWordIndex, duration, pauseBetweenWords, started, words]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
        className,
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
