"use client";

// import { FileDetail } from '@boxicons/react';
import { useEffect, useRef } from "react";
import HomeComponentStyle from "./page.module.css";
import NavBar from "../navBar/page";
import Image from "next/image";
import pika from "../../../assets/image/pika.gif";
import About from '@/app/about/page'
import { Scale } from "@boxicons/react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pikachuRef = useRef<HTMLImageElement>(null);
  const frontBar = useRef<HTMLSpanElement>(null);
  const frontText = useRef<HTMLHeadingElement>(null);
  const frontEnd = useRef<HTMLHeadingElement>(null);
  const prevRef = useRef(0);
  const developerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const y = e.clientY;
  //     const x = e.clientX;
  //     const height = window.innerHeight;
  //     const width = window.innerWidth;
  //     let percent = (((y / height) + (x / width)) / 2) * 100;
  //     const front = (y / height) * 100;

  //     if (y !== 0) percent += 5;

  //     // const current = ((percent - 5) / 100) * 90;
  //     const current = 5 + (x / width) * 83;

  //     if (containerRef.current) {
  //       containerRef.current.style.setProperty("--value", `${percent}%`);
  //       containerRef.current.style.setProperty("--pika", `${current}%`);
  //     }

  //     if (pikachuRef.current) {
  //       pikachuRef.current.style.transform = current < prevRef.current ? "scaleX(-1)" : "scaleX(1)";
  //     }
  //     prevRef.current = current;

  //     if (frontBar.current) {
  //       // frontBar.current.style.width = `${(percent/100) + 50}%`
  //       if (front < 2) {
  //         frontBar.current.style.width = `${front + 480}px`
  //       }
  //       else {
  //         frontBar.current.style.width = `${front * 80}px`
  //         // console.log(front * 0.8)
  //         // console.log(front)
  //       }
  //     }
  //     if (frontText.current) {
  //       frontText.current.style.letterSpacing = `-${percent / 2}px`
  //     }
  //     if (frontEnd.current) {
  //       frontEnd.current.style.letterSpacing = `-${percent / 2}px`
  //     }
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;

      let progress = -rect.top / totalScroll;

      progress = Math.max(0, Math.min(1, progress));

      const height = window.innerHeight;
      const width = window.innerWidth;

      const x = progress * width;
      const y = progress * height;

      let percent = (((y / height) + (x / width)) / 2) * 100;
      const front = (y / height) * 100;

      if (y !== 0) percent += 5;

      const current = 5 + (x / width) * 83;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--value", `${percent}%`);
        containerRef.current.style.setProperty("--pika", `${current}%`);
        // containerRef.current.style.setProperty("--size", `${current}%`);
      }

      if (pikachuRef.current) {
        pikachuRef.current.style.transform = current < prevRef.current ? "scaleX(-1)" : "scaleX(1)";
      }
      prevRef.current = current;

      if (frontBar.current) {
        if (front < 2) {
          frontBar.current.style.width = `${front + 480}px`;
        } else {
          frontBar.current.style.width = `${front * 80}px`;
        }
      }

      if (developerRef.current) {
        developerRef.current.style.transform = `scale(1,${2 + (percent / 200)})`;
      }

      if (frontText.current) {
        frontText.current.style.transform = `scale(1,${1 + (percent / 300)})`;
        frontText.current.style.letterSpacing = `-${percent / 2}px`;
      }

      if (frontEnd.current) {
        frontEnd.current.style.letterSpacing = `-${percent / 2}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={HomeComponentStyle.Home}>
      <NavBar />
      <div ref={containerRef} className={HomeComponentStyle.HomeContainer}>
        <div className={HomeComponentStyle.HeroContainer}>
          {/* <h1>Im<p>-gowtham-</p>cd</h1>
        <div className={HomeComponentStyle.HomeMiddleContainer}>
          <ul className={HomeComponentStyle.textContainer}>
            <li>Building scalable, production-grade web applications with a focus on performance, clean architecture, and real-world problem solving.</li>
            <li>Experienced in MERN, Next.js, and Spring Boot, designing efficient APIs and reliable backend systems.</li>
            <li>I build things that scale.</li>
          </ul>
          <div className={HomeComponentStyle.ResumeContainer}>
            <a href="" download>ResuME <FileDetail /></a>
          </div>
        </div> */}
          <div className={HomeComponentStyle.FrontEndContainer}>
            <div className={HomeComponentStyle.frontContainer}>
              <h1 className={HomeComponentStyle.frontText} ref={frontText}>FRoNT</h1>
              <span className={HomeComponentStyle.frontBar} ref={frontBar}></span>
              <h1 className={HomeComponentStyle.frontTextEnd} ref={frontEnd}>End</h1>
            </div>
            <h1 className={HomeComponentStyle.devText} ref={developerRef}>DEVELOPER</h1>
            <div className={HomeComponentStyle.devContainer}>
              <p className={HomeComponentStyle.devTextEnd}>coMpuTer sciEnce & enGineeRing stuDent buiLdinG faSt, scaLabLe, inTeracTive web exPerienCes—reAct, next.js, spriNg boOt & meRn—foCused on perFormanCe, cLean archiTecTure & soLvinG comPlex proBlems.</p>
            </div>
          </div>
          <div className={HomeComponentStyle.HomeFooterContainer}>
            <Image src={pika} alt="PiKaCHu" ref={pikachuRef} className={HomeComponentStyle.PiKaCHu} />
            {/* <p>ScRoll doWn</p> */}
            <div className={HomeComponentStyle.InfiniteScrollConainer}>
              <div className={HomeComponentStyle.InfiniteScrollAnime}>
                <ul className={HomeComponentStyle.InfiniteScrollContent}>
                  <li>Html</li>
                  <li>Css</li>
                  <li>MERN</li>
                  <li>Next</li>
                  <li>Angular</li>
                  <li>Nest</li>
                  <li>SpringBoot</li>
                  <li>Vue</li>
                </ul>
                <ul className={HomeComponentStyle.InfiniteScrollContent} aria-hidden>
                  <li>Html</li>
                  <li>Css</li>
                  <li>MERN</li>
                  <li>Next</li>
                  <li>Angular</li>
                  <li>Nest</li>
                  <li>SpringBoot</li>
                  <li>Vue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}