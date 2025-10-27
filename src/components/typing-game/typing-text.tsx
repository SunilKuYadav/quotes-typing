

// components/TypingText.tsx
import React, { useMemo } from 'react';

interface TypingTextProps {
  text: string;
  userInput: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, userInput }) => {
  const displayText = useMemo(() => {
    return text.split('').map((char, index) => {
      if (index >= userInput.length) {
        return <span key={index} style={{ color: '#ccc' }}>{char}</span>;
      }
      if (char === userInput[index]) {
        return <span key={index} style={{ color: 'green' }}>{char}</span>;
      }
      return <del key={index} style={{ color: 'red' }}>{char}</del>;
    });
  }, [text, userInput]);

  return <>{displayText}</>;
};

export { TypingText };
