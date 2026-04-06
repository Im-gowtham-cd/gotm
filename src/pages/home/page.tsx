"use client";

import { useEffect, useRef } from "react";
import HomeComponentStyle from "./page.module.css";
import NavBar from "../navBar/page";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      const height = window.innerHeight;
      const x = e.clientX;
      const width = window.innerWidth;
      // let percent =0;

      let percent = (((y / height) + (x / width)) / 2) * 100;

      if (y !== 0) {
        percent += 5;
      }
      if (containerRef.current) {
        containerRef.current.style.setProperty("--value", `${percent}%`);
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
        <h1>Im<p>-gowtham-</p>cd</h1>
      </div>
    </div>
  );
}