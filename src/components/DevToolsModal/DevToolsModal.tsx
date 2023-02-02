import React, { useEffect, useState } from 'react';
import Modal from '@/components/UI/Modal';
import useKeyPress from '@/hooks/useKeyPress';
import Title from '@/components/Title';
import cl from './DevToolsModal.module.scss';
import Checkbox from '@/components/UI/Checkbox';
import { motion } from 'framer-motion';
import useConfigInput from '@/hooks/useConfigInput';
import { Pages } from '@/components/Routing';
import Select from '@/components/UI/Select';
import useNavigate from '@/hooks/useNavigate';
import useRoutingContext from '@/hooks/useRoutingContext';
import useConfigContext from '@/hooks/useConfigContext';
import { updateConfig } from '@/contexts/ConfigContext';
import useMatchMedia from '@/hooks/useMatchMedia';

const PagesVariants = Object.keys(Pages);

const DevToolsModal = () => {
  const {
    state: { devToolsModal },
    dispatch,
  } = useConfigContext();
  const isMobile = useMatchMedia('(max-width: 850px)');

  const setModalState = (newValue: boolean) => {
    dispatch(updateConfig({ devToolsModal: newValue }));
  };

  const [showCursor, onShowCursorChange] = useConfigInput('showCursor');
  const [showCustomCursor, onShowCustomCursorChange, setShowCustomCursor] =
    useConfigInput('showCustomCursor');
  const [transitionBetweenPages, onTransitionBetweenPagesChange] =
    useConfigInput('transitionBetweenPages');
  const navigate = useNavigate();
  const { currentPage } = useRoutingContext().state;
  const [currentPageInput, setCurrentPageInput] = useState<string>(currentPage);

  useEffect(() => {
    navigate(currentPageInput);
  }, [currentPageInput]);

  useEffect(() => {
    setCurrentPageInput(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!showCursor && !showCustomCursor) {
      setShowCustomCursor(true);
    }
  }, [showCursor, showCustomCursor]);

  useKeyPress('Period', () => {
    setModalState(true);
  });

  if (isMobile) {
    return null;
  }

  return (
    <Modal
      className={cl.devToolsModal}
      state={devToolsModal}
      setState={setModalState}
    >
      <Title containerClassName={cl.titleContainer} className={cl.title}>
        Welcome to <span>Devtools</span>
      </Title>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, transition: 1 }}
        className={cl.container}
      >
        <div className={cl.inputsContainer}>
          <Checkbox
            containerClassName={cl.checkBoxContainer}
            title={'Cursor:'}
            checked={showCursor}
            onChange={onShowCursorChange}
          />
          <Checkbox
            containerClassName={cl.checkBoxContainer}
            title={'Custom cursor:'}
            checked={showCustomCursor}
            onChange={onShowCustomCursorChange}
          />
          <Checkbox
            containerClassName={cl.checkBoxContainer}
            title={'Pages transition:'}
            checked={transitionBetweenPages}
            onChange={onTransitionBetweenPagesChange}
          />
        </div>
        <div className={cl.navigateContainer}>
          <span>Select page:</span>
          <Select
            variants={PagesVariants}
            currentState={currentPageInput}
            setCurrentState={setCurrentPageInput}
          />
        </div>
      </motion.div>
    </Modal>
  );
};

export default DevToolsModal;
