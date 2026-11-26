import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseDuration = 1600,
}: UseTypewriterOptions): string {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";

    if (!isDeleting && text === current) {
      const timeout = window.setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((index) => (index + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      setText((previous) =>
        isDeleting
          ? current.slice(0, previous.length - 1)
          : current.slice(0, previous.length + 1)
      );
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return text;
}
