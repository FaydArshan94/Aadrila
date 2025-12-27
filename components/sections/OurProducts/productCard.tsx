import Image from "next/image";
import { Product } from "../../../lib/constants";
import { Button } from "@/components/ui/button";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductCard({
  tag,
  title,
  description,
  features,
  benefits,
  image,
  ctaPrimary,
  ctaSecondary,
  reverse,
  circleImage,
}: Product) {


  gsap.registerPlugin(ScrollTrigger);

const cardRef = useRef<HTMLDivElement>(null);
const textRef = useRef<HTMLDivElement>(null);
const imageRef = useRef<HTMLDivElement>(null);
const circleRef = useRef<HTMLImageElement>(null);

useEffect(() => {
  // Add a small delay to ensure DOM is ready before animation
  const timer = setTimeout(() => {
    const ctx = gsap.context(() => {
      const direction = reverse ? -60 : 60;

      gsap.from(cardRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -direction,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      gsap.from(circleRef.current, {
        opacity: 0,
        scale: 0.85,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, 50);

  return () => clearTimeout(timer);
}, [reverse]);


  return (
    <div

    ref={cardRef}

      className={`relative w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div  ref={textRef} className="sm:w-full">
        <span className="inline-block text-white mb-3 rounded-full bg-linear-to-r from-[#CD6028] via-[#9e5f47] to-[#3E6EB4] px-4 py-2 lg:px-7 lg:py-3 font-bold text-xs lg:text-xl">
          {tag}
        </span>

        <h3 className="text-2xl lg:text-3xl 1xl:text-4xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="mb-4">
          <h4 className="font-bold mb-2 text-[#696969]">Features</h4>
          <ul className="list-disc pl-5 space-y-1 text-[#696969]">
            {features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-bold mb-2 text-[#696969]">Benefits</h4>
          <ul className="list-disc pl-5 text-[#696969] space-y-1">
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex mt-10 gap-4">
          <Button className=" px-6 py-6.5 lg:px-9.5 lg:py-6.5 rounded-full ">
            {ctaPrimary}
          </Button>
          <Button className=" px-6 py-6.5  lg:px-11 lg:py-6.5 rounded-full ">
            {ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Image Container */}
      <div ref={imageRef} className= {`relative overflow-hidden flex items-center justify-center ${reverse ? "xl:justify-center" : "xl:justify-end"} w-80 md:w-full   h-80 md:h-auto`}>
        {/* Product Background Image */}
        

        <Image src={image} alt="img" width={1000} height={1000} className="rounded-[30px] md:w-100 md:h-90 lg:w-120 lg:h-105" />

        
            


      </div>

      <Image ref={circleRef} alt="chalt" width={200} height={200} src={circleImage} className={`lg:w-140 lg:h-140 1xl:w-180 1xl:h-150  w-105   h-105   md:w-[30rem] md:h-[30rem] -bottom-15 absolute ${reverse ? "md:-left-30 lg:-left-40 xl:-left-52" : "md:-right-30 lg:-right-40 xl:-right-52"}  md:-top-2  lg:-top-6 z-[-1]`}/>
    </div>
  );
}
