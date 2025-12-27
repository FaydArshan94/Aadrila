"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {



  gsap.registerPlugin(ScrollTrigger);

  const footerRef = useRef<HTMLElement>(null);
const leftRef = useRef<HTMLDivElement>(null);
const formRef = useRef<HTMLDivElement>(null);
const inputsRef = useRef<HTMLDivElement>(null);
const bottomBarRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Footer base fade
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });

    // Left content
    gsap.from(leftRef.current, {
      opacity: 0,
      x: -60,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
      },
    });

    // Form card
    gsap.from(formRef.current, {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        scrub: true,
      },
    });

    // Form inputs stagger
    gsap.from(
      inputsRef.current?.querySelectorAll("input, textarea, button") || [],
      {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      }
    );

    // Bottom bar
    gsap.from(bottomBarRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bottomBarRef.current,
        start: "top 95%",
      },
    });
  }, footerRef);

  return () => ctx.revert();
}, []);



  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Inquiry sent successfully!");
  };

  return (
    <footer  ref={footerRef} className="w-full bg-linear-to-b from-gray-50 to-white">
      {/* Main Contact Section */}
      <div className="max-w-8xl mx-auto px-4 lg:px-16 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-8 lg:gap-12 lg:min-h-[452px] xl:max-h-[580px]">
          {/* Left Column - Contact Info */}
          <div ref={leftRef} className="space-y-8  lg:pr-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-xl bg-gradient-to-r from-[#C85A28] via-[#B85A35] to-[#8B5A4A] text-transparent bg-clip-text leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              {/* U.S. Office */}
              <div className="group">
                <div className="flex flex-col items-start rounded-lg transition-colors hover:bg-gray-100 ">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#3E6EB4]"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h3 className="font-bold text-md underline text-gray-900">
                      U.S. Office
                    </h3>
                  </div>
                  <p className="text-sm text-black leading-5 pl-7">
                    Adelphia Technologies INC
                    <br />8 The Green, STE R, in the City of Dover County of
                    Kent Zip Code 19901
                  </p>
                </div>
              </div>

              {/* India Office */}
              <div className="group">
                <div className="flex flex-col items-start rounded-lg transition-colors hover:bg-gray-100 ">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#3E6EB4]"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <h3 className="font-bold text-md underline text-gray-900">
                      India Office
                    </h3>
                  </div>
                  <p className="text-sm text-black leading-5 pl-7">
                    Adelphia Technologies Private Limited
                    <br />
                    Unit 707, Lotus Trade Centre, Safiwad Nagar, New Link Road,
                    Near D.N Nagar, Andheri West, Mumbai, Maharashtra 400053
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div

         
            className="bg-white rounded-2xl shadow-lg p-6 lg:py-16 sm:p-8 border border-gray-100
                          lg:absolute lg:right-0 lg:top-0
                          lg:w-[28rem] lg:h-[40rem]
                          xl:w-[37.5rem] xl:h-[41.5rem] 
                          2xl:w-[40rem] 2xl:h-[41.5rem] 2xl:right-16"
          >
            <div  className="space-y-4 lg:space-y-5 h-full flex flex-col">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 lg:py-3.5 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 lg:py-3.5 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 lg:py-3.5 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 lg:py-3.5 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <input
                  type="text"
                  name="inquiryType"
                  placeholder="Inquiry Type"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 lg:py-3.5 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div className="flex-1">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-full min-h-[150px] lg:min-h-[180px] xl:max-h-[200px] px-4 py-3 rounded-lg border border-gray-200 focus:border-[#3E6EB4] focus:ring-2 focus:ring-[#2e6dcd] outline-none transition-all resize-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#3E6EB4] hover:bg-[#2e6dcd] text-white font-medium py-3 lg:py-3.5 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div  className="bg-[#3E6EB4] text-white">
        <div className="max-w-3xl flex items-center justify-start   px-4 sm:px-8  2xl:max-w-4xl xl:px-[6rem] lg:px-[5rem]  py-8 lg:py-16">
          <div className="space-y-3 sm:space-y-4 lg:pr-20 xl:pr-20  text-sm lg:text-base ">
            <p className="font-light text-center sm:text-left">
              © 2025 by Adelphia Technologies Private Limited CIN
              U74999UP2017PTC094686
            </p>
            <p className="font-light text-center sm:text-left opacity-90">
              Registered Address: B-1, 192/6, Sector-K Aliganj, Lucknow,
              Lucknow, Uttar Pradesh, India, 226024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
