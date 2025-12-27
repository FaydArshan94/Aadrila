import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { Pagination, PaginationItem, PaginationLink } from "../ui/pagination";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const BlogSection = () => {

  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef<HTMLElement>(null);
const headerRef = useRef<HTMLDivElement>(null);
const cardsRef = useRef<HTMLDivElement>(null);
const paginationRef = useRef<HTMLDivElement>(null);
const decoLeftRef = useRef<HTMLDivElement>(null);
const decoRightRef = useRef<HTMLDivElement>(null);




useEffect(() => {
  const ctx = gsap.context(() => {
    // Section base fade
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    // Header animation
    gsap.from(headerRef.current?.children || [], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      },
    });

    

    // Decorative dots
    gsap.from(decoLeftRef.current, {
      opacity: 0,
      x: -40,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    gsap.from(decoRightRef.current, {
      opacity: 0,
      x: 40,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    // Pagination
    gsap.from(paginationRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: paginationRef.current,
        start: "top 90%",
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);



  const blogs = [
    {
      id: 1,
      title: "How AI is Revolutionizing Document Management for Enterprises",
      date: "26 July, 2025",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Enterprise",
    },
    {
      id: 2,
      title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
      date: "26 July, 2025",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Finance",
    },
    {
      id: 3,
      title:
        "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
      date: "26 July, 2025",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
      category: "Technology",
    },
  ];

  return (
    <section ref={sectionRef} className="relative  py-6 px-4 sm:px-6 lg:px-8 ">
      {/* Decorative Elements */}
      <div ref={decoLeftRef} className="absolute  w-32 h-20 top-0 -left-10  opacity-50 lg:opacity-100  md:left-10 md:top-0 md:w-40 lg:w-47  lg:h-30 ">
        <Image src="/big-dot-pattern.svg" alt="Decorative Element 1" fill />
      </div>

      <div ref={decoRightRef} className="absolute bottom-[32%] w-30 h-20 right-2 md:top-49.75  md:w-66 md:h-16  ">
        <Image src="/small-dot-pattern.svg" alt="Decorative Element 2" fill />
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16 ">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-4">
            Blogs
          </h1>
          <p className="text-lg sm:text-lg lg:text-2xl bg-linear-to-r from-[#C85A28] via-[#B85A35] to-[#8B5A4A] text-transparent bg-clip-text max-w-4xl mx-auto px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br className="hidden sm:block" />
            Lorem Ipsum has been the industry's standard.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 lg:px-12 mb-12">
          {blogs.map((blog, index) => (
            <Card
              key={blog.id}
              className={`group hover:shadow-2xl relative transition-all duration-300 border-0 shadow-lg bg-white ${
                blogs.length === 3 && index === 2
                  ? "md:col-span-2 md:max-w-md md:mx-auto lg:col-span-1"
                  : ""
              }`}
            >
              <CardHeader className=" ">
                <CardTitle className="text-md sm:text-md lg:text-md font-bold leading-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-3">
                  {blog.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{blog.date}</span>
                </div>
              </CardHeader>
              <CardContent className="">
                <CardDescription className="text-gray-600 leading-6 line-clamp-4">
                  {blog.description}
                </CardDescription>
              </CardContent>

              <Card className="w-full h-32  -bottom-4 left-1/2 lg:h-28 lg:w-[115%] xl:w-[112%]  lg:-bottom-10   bg-linear-to-r from-purple-200 via-purple-200 to-blue-50 absolute rounded-lg  -translate-x-1/2 z-[-1]"></Card>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div ref={paginationRef} className="">
          <Pagination className="flex items-center gap-4 lg:mt-20">
            <PaginationLink className="bg-[#3E6EB4] hover:bg-[#2e6dcd] w-8 h-8 lg:w-10 lg:h-10">
              <Image
                src="/arrow-left.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </PaginationLink>
            <PaginationLink className="bg-[#3E6EB4] hover:bg-[#2e6dcd] w-8 h-8 lg:w-10 lg:h-10">
              <Image src="/arrow-right.svg" alt="Next" width={24} height={24} />
            </PaginationLink>
          </Pagination>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
