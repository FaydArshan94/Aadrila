"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 
         bg-white/10 backdrop-blur-md shadow-mdbg-transparent"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* LOGO — ONLY AFTER LOADER */}

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/" className="flex items-center">
              <Image src="/Logo.svg" alt="Logo" width={52} height={52} />
              <Image src="/LogoText.svg" alt="Logo" width={100} height={100} />
            </Link>
          </motion.div>

          {/* DESKTOP NAV */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex items-center space-x-8"
          >
            {["Home", "Industries", "Products", "Blog", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : "#"}
                  className="text-sm font-medium text-gray-700 hover:text-[#2e6dcd] transition-colors"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-[#2e6dcd]"
            >
              About Us
            </Link>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Button className="px-3 sm:px-20 lg:px-6 py-2">Get a Demo</Button>
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden bg-white border-t shadow-lg"
        >
          <div className="px-4 py-4 space-y-3">
            {["Home", "Industries", "Products", "Blog", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : "#"}
                  className="block text-sm font-medium text-gray-700 hover:text-[#2e6dcd] py-2"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-700 hover:text-[#2e6dcd] py-2"
            >
              About Us
            </Link>
            <Button className="w-full rounded-full mt-4">Get a Demo</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
