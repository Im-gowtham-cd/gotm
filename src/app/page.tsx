'use client';

import { KeyframeEaseIn } from '@boxicons/react';
import HomeStyle from './page.module.css';
import { useRef, useEffect } from 'react';
import { createTimeline } from 'animejs';

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || !fillRef.current || !textRef.current) return;

    const tl = createTimeline();

    tl.add(containerRef.current, {
      '--stop': ['0%','50%','50%' ,'100%'],
      duration: 3000,
    });

    tl.add(fillRef.current, {
      width: ['0%', '100%'],
    }, '0');

    tl.add(textRef.current, {
      translateX: [0, 275],
    }, '-=3000');

  }, []);

  return (
    <div ref={containerRef} className={HomeStyle.HomeContainer}>
      <div className={HomeStyle.LoadingTextContainer}>
        <p className={HomeStyle.LoadingText}></p>
      </div>

      <div className={HomeStyle.GoTMContainer}>
        <h1 className={HomeStyle.HomeTitle}>goTm</h1>

        <div className={HomeStyle.LoadingBarContainer}>
          <div ref={fillRef} className={HomeStyle.LoadingFill}></div>

          <p ref={textRef} className={HomeStyle.LoadingBarWelcome}>
            Hello <KeyframeEaseIn width={40} height={40} />
          </p>
        </div>
      </div>

      <div className={HomeStyle.LoadingTextContainer}></div>
    </div>
  );
}