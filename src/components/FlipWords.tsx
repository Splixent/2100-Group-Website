import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export default function FlipWords({ words, duration = 3000, className }: FlipWordsProps) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    const id = setInterval(next, duration);
    return () => clearInterval(id);
  }, [next, duration]);

  return (
    <span style={{ display: 'inline-block', position: 'relative' }} className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{
            display: 'inline-block',
            color: 'var(--color-accent)',
          }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
