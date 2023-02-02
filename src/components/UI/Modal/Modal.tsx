import React, { HTMLAttributes, MouseEvent, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import cl from './Modal.module.scss';
import classNames from 'classnames';
import useKeyPress from '@/hooks/useKeyPress';

export interface IModal extends HTMLAttributes<HTMLDivElement> {
  state: boolean;
  setState:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((newValue: boolean) => void);
}

const Modal: React.FC<IModal> = ({
  children,
  state,
  setState,
  className,
  onClick,
  ...props
}) => {
  const closeModal = useCallback(() => {
    setState(false);
  }, [state]);

  const preventClosingModal = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  }, []);

  useKeyPress('Escape', closeModal, 'keydown');

  return createPortal(
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className={cl.modalScreen}
          onClick={closeModal}
        >
          <div
            className={classNames(cl.modalContent, className)}
            onClick={preventClosingModal}
            {...props}
          >
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.querySelector('#modals')!,
  );
};

export default Modal;
