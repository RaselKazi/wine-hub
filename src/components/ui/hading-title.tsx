import { cn } from "@/lib/utils";
import React from "react";
interface HadingTitleProps {
  className?: string;
  hadingTitle: string;
  subTitle?: string;
  title: string;
}
const HadingTitle: React.FC<HadingTitleProps> = ({
  hadingTitle,
  subTitle,
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-center w-full max-w-2xl mx-auto text-center space-y-1 py-12",
        className
      )}
    >
      <h1 className=" font-semibold uppercase text-slate-500">{hadingTitle}</h1>
      <h1 className="text-4xl font-semibold capitalize">{title}</h1>{" "}
      <p className="text-sm text-slate-500">{subTitle}</p>
    </div>
  );
};

export default HadingTitle;
