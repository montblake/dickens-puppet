"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateRotation = (factor: number) => {
    const maxRotation = 20;
    const xRotation =
      (mousePosition.x / window.innerWidth - 0.5) * maxRotation * factor;
    const yRotation =
      (mousePosition.y / window.innerHeight - 0.5) * maxRotation * factor;
    return Math.sqrt(xRotation * xRotation + yRotation * yRotation);
  };

  const armRotation = calculateRotation(2);
  const bookRotation = calculateRotation(0.6);
  const headRotation = calculateRotation(0.4);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-red-600 to-orange-600">
      <div className="flex flex-col gap-8 items-center sm:items-start relative w-1/2 h-full">
        <h1>Puppet of Tradition</h1>
        <p>Move your mouse around the screen to see the puppet dance.</p>
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative w-full h-full">
        <Image
          className="dark:invert absolute top-0 left-0 mix-blend-multiply"
          src="/pieces_shadows.png"
          alt="Shadows"
          width={500}
          height={500}
          priority
          style={{ objectFit: "contain" }}
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-red-800 mix-blend-multiply"></div> */}
        <Image
          className="dark:invert absolute top-0 left-0"
          src="/pieces_2_body.png"
          alt="Dickens Torso"
          width={500}
          height={500}
          priority
          style={{ objectFit: "contain" }}
        />
        <Image
          className="dark:invert absolute top-0 left-0"
          src="/pieces_desk.png"
          alt="Desk"
          width={500}
          height={500}
          priority
          style={{ objectFit: "contain" }}
        />
        <Image
          className="dark:invert absolute top-[97px] left-[290px] transition-transform duration-100 ease-linear"
          src="/pieces_2_arm.png"
          alt="Dickens Arm"
          width={200}
          height={200}
          priority
          style={{
            objectFit: "contain",
            transform: `rotate(${armRotation}deg)`,
            transformOrigin: "10% 10%", // Adjusted to approximate shoulder joint
          }}
        />
        <Image
          className="dark:invert absolute top-[112px] left-[80px] transition-transform duration-100 ease-linear"
          src="/pieces_2_book.png"
          alt="Dickens Book Arm"
          width={145}
          height={150}
          priority
          style={{
            objectFit: "contain",
            transform: `rotate(${bookRotation}deg)`,
            transformOrigin: "80% 20%",
          }}
        />
        <Image
          className="dark:invert absolute top-[-1px] left-[193px] transition-transform duration-100 ease-linear"
          src="/pieces_2_head.png"
          alt="Dickens Head"
          width={96}
          height={200}
          priority
          style={{
            objectFit: "contain",
            transform: `rotate(${headRotation}deg)`,
            transformOrigin: "bottom center",
          }}
        />
        <Image
          className="dark:invert absolute top-[42px] left-[237px] transition-transform duration-100 ease-linear"
          src="/pieces_2_lefteye.png"
          alt="Left Eye"
          width={10}
          height={10}
          priority
          style={{
            objectFit: "contain",
            transform: `rotate(${headRotation}deg)`,
            transformOrigin: "center",
          }}
        />
        <Image
          className="dark:invert absolute top-[42px] left-[258px] transition-transform duration-100 ease-linear"
          src="/pieces_2_righteye.png"
          alt="Right Eye"
          width={10}
          height={10}
          priority
          style={{
            objectFit: "contain",
            transform: `rotate(${headRotation}deg)`,
            transformOrigin: "center",
          }}
        />
      </main>
    </div>
  );
}
