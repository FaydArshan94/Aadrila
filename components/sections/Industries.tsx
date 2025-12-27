import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IndustriesWeEmpower = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bgShapeRef = useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Header animation
      gsap.from(headerRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
        },
      });

      // Cards animation
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 60,
        stagger: 0.25,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      });

      // Background shape subtle movement
      gsap.from(bgShapeRef.current, {
        y: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const industries = [
    {
      icon: (
        <Image src="/Healthcare.svg" alt="Healthcare" width={48} height={48} />
      ),
      title: "Healthcare",
      description:
        "Streamline patient record management and ensure compliance with HIPAA standards.",
      position: "top-left",
    },
    {
      icon: (
        <Image src="/Insurance.svg" alt="Insurance" width={48} height={48} />
      ),
      title: "Lending",
      description:
        "Ensure faster loan approvals with fraud detection and smart verification.",
      position: "top-center",
    },
    {
      icon: <Image src="/Lending.svg" alt="Lending" width={48} height={48} />,
      title: "Insurance",
      description:
        "Automate claims processing with accurate document validation.",
      position: "bottom-left",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden px-4 sm:px-6 md:px-8  xl:h-[80vh]  lg:h-[110vh] lg:px-16 xl:px-20 pb-12 "
    >
      {/* Big dot pattern - Responsive positioning */}
      <div
        className="absolute top-32 right-4 z-20 w-24 h-24
                      sm:top-28 sm:right-8 sm:w-28 sm:h-28
                      md:top-32 md:right-12 md:w-32 md:h-32
                      lg:top-28 lg:right-[29%] lg:w-24 lg:h-24
                      xl:right-[27%] xl:w-40 xl:h-40
                      2xl:right-[30%]"
      >
        <Image
          src="/big-dot-pattern.svg"
          alt="big-dot"
          fill
          className="object-contain"
        />
      </div>

      {/* Main content wrapper */}
      <div className="max-w-350 mx-auto  z-10">
        {/* Background shape - Responsive sizing and positioning */}

        <Image
          ref={bgShapeRef}
          src="/Combined-Shape-Copy-flipped.svg"
          width={80}
          height={80}
          alt="circle"
          className="h-100 object-fit w-150 md:w-150 md:h-150 lg:w-160 lg:h-200 xl:w-200 xl:h-160 2xl:w-250  2xl:h-250 4xl:w-300  absolute top-0 z-0 md:left-0 2xl:-left-20 -scale-y-100  -left-20"
        />

        {/* Header section - Responsive spacing */}
        <div
          ref={headerRef}
          className="mb-8 pt-8 relative z-10
                        sm:mb-10 sm:pt-10
                        md:mb-12 md:pt-12
                        lg:mb-16 lg:pt-20
                        xl:mb-20 xl:pt-24"
        >
          <span
            className="font-bold text-base
                          sm:text-lg
                          md:text-xl
                          lg:text-2xl
                          bg-linear-to-r from-[#C85A28] via-[#B85A35] to-[#8B5A4A] text-transparent bg-clip-text"
          >
            AI-driven innovation for growth.
          </span>
          <h1
            className="text-3xl leading-tight font-semibold text-gray-900 mt-1
             sm:text-3xl sm:leading-snug sm:mt-2
             md:text-4xl md:leading-relaxed
             lg:text-[38px]
             xl:text-[48px]
             4xl:text-[52px]"
          >
            Industries We Empower
          </h1>
        </div>
      </div>

      {/* Cards container - Responsive layout */}
      <div
        ref={cardsRef}
        className="flex flex-col gap-6 relative py-10  4xl:h-[80vh] 4xl:top-20 4xl:gap-24 z-40 max-w-350 xl:max-w-650  
                      sm:gap-8 sm:mt-10
                      md:flex-row md:gap-6 md:mt-12
                      lg:absolute lg:top-0 lg:h-full lg:pb-20 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:gap-8 lg:px-8
                      xl:gap-24 xl:px-10
                      2xl:gap-20"
      >
        {/* Card 1 - Healthcare */}
        <div className="flex flex-col items-center justify-end w-full md:w-1/3 md:items-start lg:items-start">
          <Card
            className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full
                          sm:max-w-md sm:mx-auto
                          md:max-w-none md:w-full md:h-64
                          lg:w-72 lg:h-72
                          xl:w-80 xl:h-80
                          2xl:w-88 2xl:h-80"
          >
            <CardContent className="p-6 sm:p-7 md:p-6  lg:p-7  xl:p-8">
              <div className="mb-4 flex justify-center sm:mb-5 md:mb-4 lg:mb-5 xl:mb-6">
                {industries[0].icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center sm:text-2xl sm:mb-4 md:text-lg md:mb-2  lg:text-xl lg:mb-3 xl:text-2xl xl:mb-4">
                {industries[0].title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base  md:text-xs  lg:text-sm :text-lg">
                {industries[0].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Card 2 - Lending */}
        <div
          className="flex flex-col items-center justify-center w-full
                        md:w-1/3"
        >
          <Card
            className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full
                          sm:max-w-md sm:mx-auto
                          md:max-w-none md:w-full md:h-64
                          lg:w-72 lg:h-72
                          xl:w-80 xl:h-80
                          2xl:w-88 2xl:h-80"
          >
            <CardContent
              className="p-6
                                    sm:p-7
                                    md:p-6
                                    lg:p-7
                                    xl:p-8"
            >
              <div
                className="mb-4 flex justify-center
                            sm:mb-5
                            md:mb-4
                            lg:mb-5
                            xl:mb-6"
              >
                {industries[1].icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3 text-center
                            sm:text-2xl sm:mb-4
                            md:text-lg md:mb-2
                            lg:text-xl lg:mb-3
                            xl:text-2xl xl:mb-4"
              >
                {industries[1].title}
              </h3>
              <p
                className="text-gray-600 text-center leading-relaxed text-sm
                          sm:text-base
                          md:text-xs
                          lg:text-sm
                          xl:text-lg"
              >
                {industries[1].description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Card 3 - Insurance */}
        <div
          className="flex flex-col items-center justify-start w-full
                        md:w-1/3 md:items-end
                        lg:items-end"
        >
          <Card
            className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full
                          sm:max-w-md sm:mx-auto
                          md:max-w-none md:w-full md:h-64
                          lg:w-72 lg:h-72
                          xl:w-80 xl:h-80
                          2xl:w-88 2xl:h-80"
          >
            <CardContent
              className="p-6
                                    sm:p-7
                                    md:p-6
                                    lg:p-7
                                    xl:p-8"
            >
              <div
                className="mb-4 flex justify-center
                            sm:mb-5
                            md:mb-4
                            lg:mb-5
                            xl:mb-6"
              >
                {industries[2].icon}
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-3 text-center
                            sm:text-2xl sm:mb-4
                            md:text-lg md:mb-2
                            lg:text-xl lg:mb-3
                            xl:text-2xl xl:mb-4"
              >
                {industries[2].title}
              </h3>
              <p
                className="text-gray-600 text-center leading-relaxed text-sm
                          sm:text-base
                          md:text-xs
                          lg:text-sm
                          xl:text-lg"
              >
                {industries[2].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeEmpower;
