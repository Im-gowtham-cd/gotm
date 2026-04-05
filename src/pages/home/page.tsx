"use client";

import { useEffect, useRef } from "react";
import HomeComponentStyle from "./page.module.css";
import NavBar from "../navBar/page";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const width = window.innerWidth;
      const percent = (x/width) * 100;
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
    </div>
  );
}