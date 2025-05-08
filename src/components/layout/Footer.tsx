"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import footerIllustration from "@/assets/images/footer-illustration.png";
import deliveryBoy from "@/assets/images/delivery-boy.svg";
import shapeWhite from "@/assets/shape/shape-white.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="   bg-white overflow-hidden ">
      <div
        className="relative bg-cover bg-center bg-no-repeat border-b-4 border-gray-400 w-full"
        style={{ backgroundImage: `url(${footerIllustration.src})` }}
      >
        <div
          className=" absolute top-0 left-0 w-full object-cover"
          style={{ backgroundImage: `url(${shapeWhite.src})` }}
        ></div>
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto py-32">
          <div className="footer-brand">
            <a href="#" className=" text-4xl  text-black  ">
              Foodie<span className="span">.</span>
            </a>
            <p className="text-muted-foreground my-6 text-lg lg:text-xl ">
              Financial experts support or help you to find out which way you
              can raise your funds more.
            </p>
            <ul className="social-list flex gap-2">
              {[Facebook, Twitter, Instagram].map((platform, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="social-link bg-dark-orange text-white text-xl p-2 transition hover:bg-rich-black-fogra-29"
                  >
                    {/* <platform /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="  text-lg lg:text-xl text-muted-foreground space-y-3">
            <li className="  flex items-center">
              <p className=" text-xl lg:text-2xl text-black  font-bold">
                Contact Info
              </p>
              <div className=" bg-secondary h-2 w-16 ml-2 "></div>
              <div className=" bg-secondary h-2 w-2 ml-2"></div>
            </li>
            <li>
              <p className="footer-list-item">+1 (062) 109-9222</p>
            </li>
            <li>
              <p className="footer-list-item">Info@YourGmail24.com</p>
            </li>
            <li>
              <address className="footer-list-item">
                153 Williamson Plaza, Maggieberg, MT 09514
              </address>
            </li>
          </ul>

          <ul className=" text-lg lg:text-xl text-muted-foreground space-y-3">
            <li className=" flex items-center ">
              <p className=" text-xl lg:text-2xl text-black  font-bold">
                Opening Hours
              </p>
              <div className=" bg-secondary h-2 w-16 ml-2 "></div>
              <div className=" bg-secondary h-2 w-2 ml-2"></div>
            </li>
            <li>
              <p className="footer-list-item">Monday-Friday: 08:00-22:00</p>
            </li>
            <li>
              <p className="footer-list-item">Tuesday 4PM: Till Mid Night</p>
            </li>
            <li>
              <p className="footer-list-item">Saturday: 10:00-16:00</p>
            </li>
          </ul>
        </div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20 }}
          className="absolute bottom-0 left-0 w-full"
        >
          <Image
            src={deliveryBoy.src}
            alt="Delivery Boy"
            loading="lazy"
            width={100}
            height={100}
            className=""
          />
        </motion.div>
      </div>

      <div className=" py-6 text-center">
        <div className="container mx-auto">
          <p className=" text-muted-foreground text-xl">
            &copy; 2024
            <a href="#" className=" hover:underline duration-300  mx-1 ">
              code with Kazi
            </a>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
