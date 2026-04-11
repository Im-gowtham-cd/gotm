"use client";

// import { FileDetail } from '@boxicons/react';
import { useEffect, useRef } from "react";
import HomeComponentStyle from "./page.module.css";
import NavBar from "../navBar/page";
import Image from "next/image";
import pika from "../../../assets/image/pika.gif";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pikachuRef = useRef<HTMLImageElement>(null);
  const frontBar = useRef<HTMLSpanElement>(null);
  const frontText = useRef<HTMLHeadingElement>(null);
  const frontEnd = useRef<HTMLHeadingElement>(null);
  const prevRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      const x = e.clientX;
      const height = window.innerHeight;
      const width = window.innerWidth;
      let percent = (((y / height) + (x / width)) / 2) * 100;
      const front = (y / height) * 100;

      if (y !== 0) percent += 5;

      // const current = ((percent - 5) / 100) * 90;
      const current = 5 + (x / width) * 83;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--value", `${percent}%`);
        containerRef.current.style.setProperty("--pika", `${current}%`);
      }

      if (pikachuRef.current) {
        pikachuRef.current.style.transform = current < prevRef.current ? "scaleX(-1)" : "scaleX(1)";
      }
      prevRef.current = current;

      if (frontBar.current) {
        // frontBar.current.style.width = `${(percent/100) + 50}%`
        if (percent == 0) {
          frontBar.current.style.width = `${front + 180}px`
        }
        else {
          frontBar.current.style.width = `${front * 80}px`
          console.log(front * 0.8)
          console.log(front)
        }
      }
      if (frontText.current) {
        frontText.current.style.letterSpacing = `-${percent / 3}px`
      }
      if (frontEnd.current) {
        frontEnd.current.style.letterSpacing = `-${percent / 3}px`
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={HomeComponentStyle.HomeContainer}>
      <NavBar />
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
            <h1 className={HomeComponentStyle.frontText} ref={frontText}>FRoNt</h1>
            <span className={HomeComponentStyle.frontBar} ref={frontBar}></span>
            <h1 className={HomeComponentStyle.frontTextEnd} ref={frontEnd}>eNd</h1>
          </div>
          <h1 className={HomeComponentStyle.devText}>DeVelOpEr</h1>
          <p className={HomeComponentStyle.devTextEnd}>p</p>
        </div>
        <div className={HomeComponentStyle.HomeFooterContainer}>
          <Image src={pika} alt="PiKaCHu" ref={pikachuRef} className={HomeComponentStyle.PiKaCHu} />
        </div>
      </div>
    </div>
  );
}