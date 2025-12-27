"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  const sectionVariant: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headingVariant: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const visionVariant: any = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const missionVariant: any = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const dividerVariant: any = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const floatingIcon: any = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 lg:opacity-20">
        <Image
          src="/abstract.png"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full px-4 lg:px-0">
        {/* Heading */}
        <motion.div
          variants={headingVariant}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block rounded-xl py-6 px-4 w-full sm:w-[40%] lg:w-[40%] lg:px-14 lg:py-10 bg-white shadow-md mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
              About Us
            </h2>
            <p className="mt-3 lg:mt-4 text-sm bg-linear-to-r from-[#C85A28] via-[#B85A35] to-[#2261cf] text-transparent bg-clip-text">
              Meet the Minds Shaping Document Automation.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={visionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center lg:justify-start mb-12 lg:mb-16"
        >
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-6 bg-white shadow-lg rounded-2xl lg:rounded-r-full px-6 py-6 lg:px-3 lg:py-3 w-full sm:max-w-xl lg:max-w-[52rem]">
            <p className="text-sm lg:text-md text-center lg:text-right text-gray-600">
              To redefine document management with cutting-edge technology that
              ensures accuracy, efficiency, and trust.
            </p>

            <motion.div
              variants={dividerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-16 h-[2px] lg:w-1 lg:h-16 bg-[#CD6028]"
            />

            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
              <span className="text-lg lg:text-xl font-bold">
                Our Vision
              </span>

              <motion.div
                variants={floatingIcon}
                animate="animate"
                className="w-16 h-16 lg:w-24 lg:h-20 rounded-full bg-[#3E6EB4] flex items-center justify-center"
              >
                <Image
                  alt="Vision icon"
                  width={40}
                  height={40}
                  src="/Vision_Icon.svg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={missionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 bg-white shadow-lg rounded-2xl lg:rounded-l-full px-6 py-6 lg:px-3 lg:py-3 w-full sm:max-w-xl lg:max-w-[52rem]">
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
              <motion.div
                variants={floatingIcon}
                animate="animate"
                className="w-16 h-16 lg:w-24 lg:h-20 rounded-full bg-[#3E6EB4] flex items-center justify-center"
              >
                <Image
                  alt="Mission icon"
                  width={40}
                  height={40}
                  src="/Vision_Icon.svg"
                />
              </motion.div>

              <span className="text-lg lg:text-xl font-bold">
                Our Mission
              </span>
            </div>

            <motion.div
              variants={dividerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-16 h-[2px] lg:w-1 lg:h-16 bg-[#CD6028]"
            />

            <p className="text-sm lg:text-md text-center lg:text-left text-gray-600">
              To redefine document management with cutting-edge technology that
              ensures accuracy, efficiency, and trust.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
