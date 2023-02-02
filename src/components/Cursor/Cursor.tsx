import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cl from './Cursor.module.scss';
import useWindowEvent from '@/hooks/useWindowEvent';
import { createPortal } from 'react-dom';
import useCursorContext from '@/hooks/useCursorContext';
import { AnimatePresence, motion } from 'framer-motion';
import { CursorItemProps } from '@/contexts/CursorContext';
import useConfigContext from '@/hooks/useConfigContext';
import useMatchMedia from '@/hooks/useMatchMedia';

interface ICursor {
  size?: number;
}

const Cursor: FC<ICursor> = ({ size = 40 }) => {
  const { state: items } = useCursorContext();
  const {
    state: { showCustomCursor },
  } = useConfigContext();
  const followerRef = useRef<null | HTMLDivElement>(null);
  const cursorRef = useRef<null | HTMLDivElement>(null);
  const [currentItem, setCurrentItem] = useState<CursorItemProps>({
    id: 0,
    text: '',
    position: 'top',
  });
  const [hovered, setHovered] = useState<boolean>(false);
  const isMobile = useMatchMedia('(max-width: 750px)');

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { current: follower } = followerRef;
    const { current: cursor } = cursorRef;
    if (!follower || !cursor) return;

    const setCords = (el: HTMLElement) => {
      el.style.top = e.clientY + 'px';
      el.style.left = e.clientX + 'px';
    };

    setCords(follower);
    setCords(cursor);
  }, []);

  const setOpacity = useCallback((opacity: number) => {
    const { current: cursor } = cursorRef;
    const { current: follower } = followerRef;
    if (!cursor || !follower) return;

    cursor.style.opacity = opacity + '';
    follower.style.opacity = opacity + '';
  }, []);

  const onMouseOut = useCallback(() => {
    setOpacity(0);
  }, []);

  const onMouseOver = useCallback(() => {
    setOpacity(1);
  }, []);

  useWindowEvent('mouseover', onMouseOver);
  useWindowEvent('mouseout', onMouseOut);
  useWindowEvent('mousemove', onMouseMove);
  useWindowEvent('contextmenu', (e) => e.preventDefault());

  useEffect(() => {
    const clearCallback = () => {
      setCurrentItem({ id: 0, text: '', position: 'top' });
      setHovered(false);
      for (const item of items) {
        const { current: target } = item.ref;

        if (target !== null) {
          target.removeEventListener('mouseover', onMouseOver);
          target.removeEventListener('mouseout', onMouseOver);
        }
      }
    };

    if (isMobile) return clearCallback;

    for (const item of items) {
      const { current: target } = item.ref;
      const onMouseOver = () => {
        setHovered(true);
        setCurrentItem(item);
      };

      const onMouseOut = () => {
        setHovered(false);
        setCurrentItem({ id: 0, text: '', position: 'top' });
      };

      if (target !== null) {
        target.addEventListener('mouseover', onMouseOver);
        target.addEventListener('mouseout', onMouseOut);
      }
    }

    return clearCallback;
  }, [items, isMobile]);

  return createPortal(
    showCustomCursor && (
      <>
        <div ref={cursorRef} data-hover={hovered} className={cl.cursor} />
        <div
          ref={followerRef}
          style={
            {
              '--size': (hovered ? size * 1.5 : size) + 'px',
            } as CSSProperties
          }
          data-hover={hovered}
          className={cl.follower}
        >
          <AnimatePresence>
            {currentItem.text && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cl.followerText}
                data-position={currentItem.position ?? 'top'}
              >
                {currentItem.text}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </>
    ),
    document.querySelector('#cursor')!,
  );
};

export default Cursor;
