import React, { useCallback, useEffect, useRef } from 'react';
import useNavigate from '@/hooks/useNavigate';
import PageContainer from '@/components/PageContainer';
import cl from './IntroPage.module.scss';
import TypingText from '@/components/TypingText';
import Particles from '@/components/Particles';
import { FaPlay } from 'react-icons/all';
import MouseHover from '@/components/MouseHover';
import Link from '@/components/UI/Link';

const introPageText =
  "Hello 1000 world ! My name is 1000 Vladislav, i'm a Frontend developer 1000 , let me show you little bit more information about me.";

const IntroPage = () => {
  const navigate = useNavigate();
  const timeoutId = useRef<number>(0);

  const navigateToHome = useCallback(() => {
    timeoutId.current = setTimeout(() => {
      navigate('AboutPage');
    }, 2500);
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <PageContainer className={cl.introPage}>
      <Particles
        className={cl.backgroundParticles}
        width={'100%'}
        height={'100%'}
      />
      <TypingText
        defaultDelay={400}
        onEnd={navigateToHome}
        className={cl.typingText}
        containerClassName={cl.typingTextContainer}
        text={introPageText}
      />
      <MouseHover text={'Skip'} position={'top'}>
        <Link
          href={'AboutPage'}
          onClick={() => clearTimeout(timeoutId.current)}
        >
          <button className={cl.skipButton}>
            <FaPlay />
          </button>
        </Link>
      </MouseHover>
    </PageContainer>
  );
};

export default IntroPage;
