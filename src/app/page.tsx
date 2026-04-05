'use client';

import { KeyframeEaseIn } from '@boxicons/react';
import HomeStyle from './page.module.css';
import { useRef, useEffect, useState } from 'react';
import { createTimeline } from 'animejs';
import Home from '@/pages/home/page'

// import { useRouter } from 'next/navigation'

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const [renderHomeState, setRenderHomeState] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !fillRef.current || !textRef.current) return;

    const tl = createTimeline();

    tl.add(containerRef.current, {
      '--stop': ['0%', '52%', '52%', '100%'],
      duration: 3000,
    });

    tl.add(fillRef.current, {
      width: ['0%', '100%'],
    }, '0');

    tl.add(textRef.current, {
      paddingLeft: ['0%', '65%'],
    }, '-=3000');

  }, []);

  // const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // router.push('/home')
      setRenderHomeState(true);
      // console.log('1')
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {renderHomeState ? (<Home />) : (
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
      )}
    </>

  );
}