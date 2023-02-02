import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import cl from './TypingText.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import parseText from '@/utils/parseText';

interface ITypingText extends HTMLAttributes<HTMLSpanElement> {
  text: string | (string | number)[];
  defaultDelay?: number;
  containerClassName?: string;
  onEnd: () => void;
}

const TypingText: FC<ITypingText> = ({
  text,
  defaultDelay = 500,
  containerClassName = '',
  onEnd = () => {},
  ...props
}) => {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  useEffect(() => {
    setRenderedWords([]);
  }, []);

  useEffect(() => {
    const formattedText: any[] = parseText(text);

    let i = -1;

    function delayLoop() {
      i++;
      if (i >= formattedText.length || !formattedText[i]) {
        return onEnd();
      }

      setRenderedWords((prevState) => [
        ...prevState,
        formattedText[i]?.text ?? '',
      ]);
      setTimeout(
        delayLoop,
        formattedText[i]?.delay ? formattedText[i].delay : defaultDelay,
      );
    }

    delayLoop();
  }, []);

  return (
    <motion.div
      layout={'position'}
      className={classNames(cl.typingTextContainer, containerClassName)}
    >
      {renderedWords.map((obj) => (
        <span {...props} key={obj}>
          {obj}
        </span>
      ))}
    </motion.div>
  );
};

export default TypingText;
