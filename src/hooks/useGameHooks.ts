import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage'; // Assuming you have this hook
import type { QuotesState } from '../types';

export const useTypingGame = (quotes: QuotesState[]) => {
  const [currentIndex, setCurrentIndex] = useLocalStorage("index", 0);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [charCount, setCharCount] = useLocalStorage("count", 0);

  const currentQuote = quotes[currentIndex] || '';

  // Start/stop the timer based on typing activity
  useEffect(() => {
    let intervalId: any;
    if (isTyping) {
      intervalId = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isTyping]);

  const handleInputChange = useCallback((text: string) => {
    setInputValue(text);
    if (!isTyping && text.length > 0) {
      setIsTyping(true); // Start timer on the first keypress
    }
    setCharCount((prev: number) => prev + 1);
  }, [isTyping, setCharCount]);
  
  const advanceToNextQuote = useCallback(() => {
    if (inputValue.trim() === currentQuote) {
      setCurrentIndex((prev: number) => (prev + 1) % quotes.length);
      setInputValue('');
      setTimer(0);
      setIsTyping(false);
      return true; // Success
    }
    return false; // Failure
  }, [inputValue, currentQuote, quotes.length, setCurrentIndex]);
  
  const resetGame = () => {
    setIsTyping(false);
    setTimer(0);
    setInputValue('');
    setCurrentIndex(0);
    setCharCount(0);
  };

  return {
    // State values for the UI
    state: {
      currentQuote,
      inputValue,
      timer,
      currentIndex,
      charCount,
      quotes,
    },
    // Actions the UI can perform
    actions: {
      handleInputChange,
      advanceToNextQuote,
      resetGame,
      setCurrentIndex,
    },
  };
};

