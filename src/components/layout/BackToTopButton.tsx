"use client";
import { ArrowUp } from "lucide-react";
import React from "react";

const BackToTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#top"
      className="  fixed bottom-5 right-5  bg-slate-50  p-3 rounded-full shadow-lg transition hover:bg-slate-200"
      aria-label="Back to top"
      onClick={handleScrollToTop}
    >
      <ArrowUp className="w-6 h-6 -rotate-90" />
    </a>
  );
};

export default BackToTopButton;
