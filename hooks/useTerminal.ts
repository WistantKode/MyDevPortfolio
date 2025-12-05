import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export const useTypewriter = ({ text, speed = 50, onComplete }: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, text, speed, onComplete, isComplete]);

  const reset = useCallback(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  return { displayedText, isComplete, reset };
};

interface UseTerminalExecutionOptions {
  commands: string[];
  typingSpeed?: number;
  executionDelay?: number;
}

export const useTerminalExecution = ({
  commands,
  typingSpeed = 50,
  executionDelay = 800,
}: UseTerminalExecutionOptions) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const startNextCommand = useCallback(() => {
    if (currentCommandIndex < commands.length - 1) {
      setCurrentCommandIndex(prev => prev + 1);
      setIsTyping(true);
      setShowOutput(false);
    }
  }, [currentCommandIndex, commands.length]);

  const onTypingComplete = useCallback(() => {
    setIsTyping(false);
    setIsExecuting(true);
    
    setTimeout(() => {
      setIsExecuting(false);
      setShowOutput(true);
      
      // Auto-start next command after showing output
      setTimeout(() => {
        startNextCommand();
      }, 1500);
    }, executionDelay);
  }, [executionDelay, startNextCommand]);

  // Start first command on mount
  useEffect(() => {
    if (currentCommandIndex === -1 && commands.length > 0) {
      startNextCommand();
    }
  }, [currentCommandIndex, commands.length, startNextCommand]);

  return {
    currentCommandIndex,
    isTyping,
    isExecuting,
    showOutput,
    startNextCommand,
    onTypingComplete,
  };
};
