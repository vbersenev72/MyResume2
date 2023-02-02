import React, { FC, useState } from 'react';
import cl from './Title.module.scss';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import classNames from 'classnames';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ITitle extends HTMLMotionProps<'span'> {
  containerClassName?: string;
}

const Title: FC<ITitle> = ({
  children,
  containerClassName,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const titleRef = useIntersectionObserver(() => {
    setVisible(true);
  });

  return (
    <h2
      ref={titleRef}
      className={classNames(cl.titleContainer, containerClassName)}
    >
      <AnimatePresence>
        {visible && (
          <motion.span
            transition={{ duration: 0.8 }}
            className={classNames(cl.title, className)}
            {...props}
            initial={{ translateY: '-150%' }}
            animate={{ translateY: 0 }}
            exit={{ translateY: '150%' }}
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </h2>
  );
};

export default Title;
