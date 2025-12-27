"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ease: any = [0.22, 1, 0.36, 1];

const MeetOurTeam = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease }}
      className="relative w-full py-20 bg-white overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block">
        <Image
          src="/Combined-Shape-Copy-flipped.svg"
          alt="Background circle"
          width={600}
          height={600}
        />
      </div>

      {/* Dot grid */}
      <div className="absolute right-20 top-40 hidden lg:block opacity-40">
        <Image
          src="/small-dot-patter.svg"
          width={120}
          height={120}
          alt="dots"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
            Meet our team
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-sm lg:text-xl bg-linear-to-r from-[#C85A28] via-[#B85A35] to-[#2261cf] text-transparent bg-clip-text">
            Meet our passionate and talented team, committed to delivering
            exceptional results, driving innovation, and transforming your
            vision into reality.
          </p>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            {[ArrowLeft, ArrowRight].map((Icon, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-md bg-[#3E6EB4] text-white flex items-center justify-center"
              >
                <Icon size={18} />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Avatars */}
        <div className="relative flex justify-center items-center mb-16">
          {/* Left avatar */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="hidden lg:block absolute left-1/4"
          >
            <div className="w-34 h-34 rounded-full border-2 border-orange-400 overflow-hidden">
              <Image
                src="/member-1.jpg"
                alt="Team member"
                width={136}
                height={136}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Center avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative z-10"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-56 h-56 lg:w-52 lg:h-52 rounded-full border-4 border-orange-500 overflow-hidden"
            >
              <Image
                src="/ceo.jpg"
                alt="Mansi Shukla"
                width={220}
                height={220}
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>

          {/* Right avatar */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="hidden lg:block absolute right-1/4"
          >
            <div className="w-34 h-34 rounded-full border-2 border-orange-400 overflow-hidden">
              <Image
                src="/member-2.jpg"
                alt="Team member"
                width={136}
                height={136}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-[#3F6FB5] text-white rounded-2xl px-6 lg:px-10 py-8 text-center relative"
        >
          {/* Pointer */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#3F6FB5] rotate-45"></div>

          <h3 className="text-xl lg:text-2xl font-semibold">
            MANSI SHUKLA
          </h3>
          <p className="text-orange-400 mt-1">CEO Futuresphere</p>

          <p className="mt-4 text-sm lg:text-base leading-relaxed opacity-90">
            For this time-constrained generation in a NOW economy, we would want
            to play our parts. We intend to make Banking not feel out of place.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MeetOurTeam;
