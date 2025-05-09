"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: Testimonial[];
  autoplay?: boolean;
  visibleCount?: number;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  visibleCount = 7,
}: AnimatedTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const half = Math.floor(visibleCount / 2);

  const rotateLeft = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const rotateRight = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(rotateLeft, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, rotateLeft]);

  const getOffset = (index: number) => {
    let offset = index - activeIndex;
    if (offset > testimonials.length / 2) offset -= testimonials.length;
    if (offset < -testimonials.length / 2) offset += testimonials.length;
    return offset;
  };

  const getVariant = (offset: number) => {
    if (Math.abs(offset) > half) {
      return { opacity: 0, scale: 0.5, zIndex: 0, x: `${offset * 33}%` };
    }
    return {
      opacity: 1,
      scale: 1 - Math.abs(offset) * 0.1,
      x: `${offset * 33}%`,
      zIndex: visibleCount - Math.abs(offset),
    };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden  px-4 pt-14">
      <Image
        src="/background/grey-gradient-background.jpg"
        alt="Wine"
        fill
        className=" object-cover"
        draggable={false}
      />
      {/* Background ambient light */}
      {/* <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[70%] aspect-square bg-slate-400  blur-3xl rounded-full opacity-40 z-0" /> */}

      {/* Fade floor upward to disappear */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent to-50% z-10" />

      {/* Bottles Carousel */}
      <div className="relative flex justify-center items-end h-[75vh] w-full z-20">
        <AnimatePresence initial={false}>
          {testimonials.map((testimonial, index) => {
            const offset = getOffset(index);
            const variant = getVariant(offset);

            return (
              <motion.div
                key={testimonial.src}
                className="absolute h-full w-[26%] rounded-xl overflow-visible"
                style={{ top: 0, bottom: 0 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={variant}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="relative h-full w-full">
                  {/* Main image */}
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    className="object-contain object-center px-12 "
                    draggable={false}
                  />

                  {/* Reflection with CSS gradient mask */}
                  <div className="absolute top-full w-full h-full scale-y-[-1] opacity-40 pointer-events-none">
                    <Image
                      src={testimonial.src}
                      alt="reflection"
                      fill
                      className="object-contain object-center px-12"
                      draggable={false}
                    />
                    {/* Gradient mask overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t to-slate-200 to-30% from-transparent mx-20" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-8 pt-2 z-30 relative">
        <button
          onClick={rotateRight}
          aria-label="Previous"
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover/button:rotate-12 text-black dark:text-white" />
        </button>
        <motion.div
          key={activeIndex}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center max-w-sm w-40 "
        >
          <h3 className="text-lg  text-black text-nowrap">
            {testimonials[activeIndex].name}
          </h3>

          <motion.p className=" text-xs text-muted-foreground text-center ">
            {testimonials[activeIndex].designation
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
          </motion.p>
        </motion.div>
        <button
          onClick={rotateLeft}
          aria-label="Next"
          className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
        >
          <ArrowRight className="h-5 w-5 transition-transform group-hover/button:-rotate-12 text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};
