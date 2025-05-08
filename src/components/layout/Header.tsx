"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "../ui/resizable-navbar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CartCard from "./CartCard";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About Us",
      link: "#about",
    },
    {
      name: "Shop",
      link: "#shop",
    },

    {
      name: "blog",
      link: "#blog",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className=" z-50" onClick={toggleSearch}>
              <Search size={20} />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className=" rounded-full p-0">
                  <ShoppingBag />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0 rounded-2xl">
                <CartCard />
              </PopoverContent>
            </Popover>
            {/* <BigButton className="">Book a call</BigButton> */}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex  gap-4">
              <Button variant="ghost" className="" onClick={toggleSearch}>
                <Search size={20} />
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className=" rounded-full p-0">
                    <ShoppingBag />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0 rounded-2xl">
                  <CartCard />
                </PopoverContent>
              </Popover>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-20%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-20%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex justify-center items-center z-50"
          >
            <div className="relative w-full max-w-lg p-6">
              <input
                type="search"
                placeholder="Type keywords..."
                className="w-full p-4 text-2xl text-white bg-transparent border-b-2 border-white placeholder-white focus:outline-none"
              />
              <button
                className="absolute top-6 right-6 text-white"
                onClick={toggleSearch}
                aria-label="Close Search"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
