"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const items = [
  { src: "/Doc.svg", alt: "Document" },
  { src: "/License.svg", alt: "License" },
  { src: "/Invocie.svg", alt: "Invoice" },
];

const positions = [
  { x: -220, scale: 0.5, blur: 2, opacity: 0.5, z: 1 },
  { x: 0, scale: 1, blur: 0, opacity: 1, z: 3 },
  { x: 220, scale: 0.5, blur: 2, opacity: 0.5, z: 1 },
];

export default function Carousel3D() {
  const slides = useRef<HTMLDivElement[]>([]);
  const order = useRef([0, 1, 2]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    applyPositions();

    intervalRef.current = setInterval(() => {
      rotate();
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const applyPositions = () => {
    order.current.forEach((slideIndex, posIndex) => {
      const el = slides.current[slideIndex];
      const p = positions[posIndex];

      gsap.to(el, {
        x: p.x,
        scale: p.scale,
        opacity: p.opacity,
        zIndex: p.z,
        filter: `blur(${p.blur}px)`,
        duration: 1,
        ease: "power3.inOut",
      });
    });
  };

  const rotate = () => {
    order.current.push(order.current.shift()!);
    applyPositions();
  };

  return (
    <div className="relative  w-full h-[450px] flex 4items-center justify-center overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) slides.current[i] = el;
          }}
          className="absolute"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={380}
            height={380}
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
