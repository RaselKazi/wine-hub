"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface HeroProps {
  autoplay?: boolean;
}

const testimonials = [
  {
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/product-11.png",
  },
  {
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/images/product-2.png",
  },
  {
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/images/product-3.png",
  },
  {
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/images/product-4.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-5.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-6.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-7.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-8.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-9.png",
  },
  {
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/product-12.png",
  },
];
// Main Component
const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="">
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default Hero;
