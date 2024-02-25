import { useState, useEffect } from "react";

interface TypeWriter {
  className?: string;
  speed: number;
  text: string;
}

export const Typewriter = ({ className, speed, text }: TypeWriter) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) =>
          text.length !== prevText.length
            ? prevText + text[currentIndex]
            : prevText,
        );
        setCurrentIndex((prevIndex) =>
          prevIndex === text.length ? prevIndex : prevIndex + 1,
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, speed, text]);

  return <span className={className}>{currentText}</span>;
};
