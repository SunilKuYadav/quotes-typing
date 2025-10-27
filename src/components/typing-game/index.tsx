import React, { useState } from "react";
import { useTypingGame } from "../../hooks";
import { TypingText } from "./typing-text";

import "./styles.css";

interface TypingGameProps {
  quotes: string[];
}

export const TypingGame: React.FC<TypingGameProps> = ({ quotes }) => {
  const { state, actions } = useTypingGame(quotes);
  const [animationKey, setAnimationKey] = useState(0); // For re-triggering animations

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      const success = actions.advanceToNextQuote();
      if (success) {
        // Change the key to force a remount and re-trigger the CSS animation
        setAnimationKey((prev) => prev + 1);
      }
    }
  };

  const getNextQuote = () => quotes[(state.currentIndex + 1) % quotes.length];
  const getPrevQuote = () =>
    quotes[(state.currentIndex - 1 + quotes.length) % quotes.length];

  return (
    <section className="typing-game-container">
      <div className="text-wrapper">
        <p className="text-preview white slide-up-">{getPrevQuote()}</p>
        <div key={animationKey} className="type-text-view slide-up">
          <TypingText text={state.currentQuote} userInput={state.inputValue} />
        </div>
        <p className="text-preview white pop-in">{getNextQuote()}</p>
      </div>
      <textarea
        className="typing-area"
        value={state.inputValue}
        rows={2}
        onChange={(e) => actions.handleInputChange(e.target.value)}
        onKeyUp={handleKeyUp}
        autoFocus
      />
    </section>
  );
};
