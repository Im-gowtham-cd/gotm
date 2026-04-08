"use client";

import { FileDetail } from '@boxicons/react';
import { useEffect, useRef } from "react";
import HomeComponentStyle from "./page.module.css";
import NavBar from "../navBar/page";
import Image from "next/image";
import pika from "../../../assets/image/pika.gif";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pikachuRef = useRef<HTMLImageElement>(null);
  const prevRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      const x = e.clientX;
      const height = window.innerHeight;
      const width = window.innerWidth;
      let percent = (((y / height) + (x / width)) / 2) * 100;

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
        <h1>Im<p>-gowtham-</p>cd</h1>
        <div className={HomeComponentStyle.HomeMiddleContainer}>
          {/* <div className={HomeComponentStyle.cardContainer}>
              <div className={HomeComponentStyle.card} >
                  <div className={HomeComponentStyle.cardSpan} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                  </div>
              </div>
          </div> */}
          <ul className={HomeComponentStyle.textContainer}>
            <li>Building scalable, production-grade web applications with a focus on performance, clean architecture, and real-world problem solving.</li>
            <li>Experienced in MERN, Next.js, and Spring Boot, designing efficient APIs and reliable backend systems.</li>
            <li>I build things that scale.</li>
          </ul>
          <div className={HomeComponentStyle.ResumeContainer}>
            <a href="" download>ResuME <FileDetail /></a>
          </div>
        </div>
        <div className={HomeComponentStyle.HomeFooterContainer}>
          <Image src={pika} alt="PiKaCHu" ref={pikachuRef} className={HomeComponentStyle.PiKaCHu} />
        </div>
      </div>
    </div>
  );
}