import { products } from "../../../lib/constants";
import ProductCard from "./productCard";
import Container from "../../common/container";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function OurProducts() {

  gsap.registerPlugin(ScrollTrigger);


  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
  const ctx = gsap.context(() => {
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
  }, sectionRef);

  return () => ctx.revert();
}, []);



  return (
    <section ref={sectionRef} className="py-16 md:py-24 xl:py-10  w-screen relative ">
      {/* Small dot pattern - Responsive positioning */}
     

      <Container>
        <Image
          src="/small-dot-pattern.svg"
          width={250}
          height={250}
          alt="dots"
          className="absolute md:-top-20 xl:w-60 xl:h-60 -top-20 w-52 h-52 -left-8 md:-left-7 z-[-1]"
        />

        <div ref={headerRef} className="text-center mb-12 ">
          <span className=" font-bold bg-linear-to-r  md:text-xl from-[#C85A28] via-[#B85A35] to-[#8B5A4A] text-transparent bg-clip-text">
            features and benefits
          </span>
          <h2 className="text-4xl md:text-4xl lg:text-5xl xl: leading-16 xl:mt-5 font-semibold">
            Our Products
          </h2>
        </div>

        <div ref={cardsRef} className="space-y-20 lg:space-y-60 xl:space-y-40 w-full  parent ">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
