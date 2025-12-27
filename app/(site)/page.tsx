"use client";
import React, { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import BlogSection from "@/components/sections/Blogs";
import Hero from "@/components/sections/Hero";
import Industries from "@/components/sections/Industries";
import OurProducts from "@/components/sections/OurProducts/OurProducts";
import Image from "next/image";
import { motion, AnimatePresence, easeOut, delay } from "framer-motion";
import { useLoader } from "@/context/LoaderContext";

const AadrilaWebsite = () => {
  const logoTransition: any = {
    type: "spring",
    stiffness: 90,
    damping: 20,
    mass: 0.8,
  };

  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "unset";
  }, [isLoading]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(t);
  }, [setIsLoading]);

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <motion.div
              layoutId="brand-logo"
              transition={logoTransition}
              className="w-[220px] h-[56px] flex items-center"
            >
              <div className="flex items-center gap-2 w-full h-full">
                <motion.div
                  className="relative w-[52px] h-[52px]"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                >
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                <motion.div
                  className="relative w-[140px] h-[40px]"
                  initial={{ scale: 0, opacity: 0, x: -80 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", delay: 1.5, duration: 2 }}
                >
                  <Image
                    src="/LogoText.svg"
                    alt="Logo Text"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-screen overflow-hidden bg-white"
        >
          <Hero />
          <Industries />
          <OurProducts />
          <BlogSection />

          <div className="h-20 lg:h-40 w-full relative">
            <Image
              alt="dots"
              width={200}
              height={200}
              className="absolute top-1/2 -translate-y-1/2 -left-24 lg:w-77.5"
              src="/small-dot-pattern.svg"
            />
          </div>

          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default AadrilaWebsite;
