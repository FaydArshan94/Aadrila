"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

import { motion } from "framer-motion";
import Carousel3D from "../carousel/Carousel3d";
import Swiper3D from "../carousel/Carousel3d";

const Hero = () => {
  const carouselItems = [
    { src: "/Doc.svg", alt: "Document", width: 500, height: 450 },
    { src: "/License.svg", alt: "License", width: 500, height: 450 },
    { src: "/Invocie.svg", alt: "Invoice", width: 500, height: 450 },
  ];

  return (
    <div className="m-h-screen lg:h-screen in overflow-hidden relative">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 lg:opacity-100">
        <Image
          src={"/abstract.png"}
          alt="Background Pattern"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative pt-32 md:pt-24 lg:pt-40 xl:pt-46 3xl:pt-60  md:pb-32 px-4 sm:px-6 lg:px-2 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="max-w-7xl xl:max-w-[90rem] 4xl:max-w-[102rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24  justify-between  items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-10 md:space-y-8 z-10"
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-[36px] md:text-5xl lg:text-5xl xl:leading-18 4xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-linear-to-r from-[#C85A28] via-[#B85A35] to-[#8B5A4A] text-transparent bg-clip-text">
                  AI-Powered
                </span>
                <br />
                Document Automation
                <br />& Fraud Detection
              </h1>

              <p className="text-xl md:text-lg text-gray-600 max-w-xl xl:text-2xl font-bold leading-relaxed">
                Enhance security, accuracy, and efficiency with our cutting-edge
                AI solutions for seamless document processing and fraud
                prevention.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 xl:gap-8 text-white">
                <Button className="bg-[#3E6EB4] hover:bg-[#2e6dcd] xl:px-18 xl:py-6.5 4xl:py-7 4xl:px-20 px-8 py-6 rounded-full text-base  shadow-lg hover:shadow-xl transition-all">
                  Get a Demo
                </Button>
                <Button className="bg-[#3E6EB4] hover:bg-[#2e6dcd] xl:px-18 xl:py-6.5 4xl:py-7 4xl:px-20 px-8 py-6 rounded-full text-base  shadow-lg hover:shadow-xl transition-all">
                  Explore Solutions
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Document Previews */}
            <motion.div
              className="relative overflow-hidden h-130 md:h-100 lg:h-120  mt-10 flex items-center justify-center"
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* 3D CAROUSEL PERSPECTIVE */}

              {/* ROTATING STAGE */}
              <Swiper3D />
            </motion.div>
          </div>
        </div>
      </motion.section>


    </div>
  );
};

export default Hero;
