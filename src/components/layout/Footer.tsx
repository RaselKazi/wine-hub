"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white overflow-hidden">
      {/* Top Section */}
      <div className="relative w-full border-b-2 border-slate-900 py-32">
        <div className="container mx-auto grid gap-16 px-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo & Intro */}
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/product-39.png"
                alt="WineHub Logo"
                width={48}
                height={48}
                className="w-12 h-auto"
              />
              <div>
                <h1 className="text-3xl font-bold uppercase">WineHub</h1>
                <p className="text-slate-400 text-sm">Since 1940</p>
              </div>
            </div>
            <p className="mt-6 text-lg lg:text-2xl uppercase text-slate-200">
              Welcome to the WineHub.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-4 flex items-center gap-3">
              Contact Info
              <span className="inline-block h-2 w-16 bg-secondary" />
              <span className="inline-block h-2 w-2 bg-secondary" />
            </h2>
            <ul className="space-y-2 text-slate-400 text-base lg:text-lg">
              <li>+1 (062) 109-9222</li>
              <li>info@yourgmail24.com</li>
              <li>
                <address className="not-italic">
                  153 Williamson Plaza, Maggieberg, MT 09514
                </address>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={`Link to ${Icon.name}`}
                  className="hover:text-secondary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-4 flex items-center gap-3">
              Opening Hours
              <span className="inline-block h-2 w-16 bg-secondary" />
              <span className="inline-block h-2 w-2 bg-secondary" />
            </h2>
            <ul className="space-y-2 text-slate-400 text-base lg:text-lg">
              <li>Monday–Friday: 08:00–22:00</li>
              <li>Tuesday 4PM – Till Midnight</li>
              <li>Saturday: 10:00–16:00</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 border-t border-slate-800">
        <nav className="flex gap-6 text-sm md:text-base text-slate-300 uppercase tracking-wider">
          {["about", "product", "contact"].map((item, idx) => (
            <Link
              key={idx}
              href={`/${item}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <p className="text-sm mt-4 md:mt-0 text-slate-400">
          &copy; 2024{" "}
          <a href="#" className="hover:underline text-white">
            Code with Kazi
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
