import { useEffect, useState } from "react";

export function useAutoType(words: string[], delay = 1000) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[roleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, words, delay]);

  return text;
}
