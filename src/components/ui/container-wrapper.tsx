import { cn } from "@/lib/utils";
import React from "react";

interface ContainerWrapperProps {
  className?: string;
  children: React.ReactNode;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <section className={cn("", className)}>
      <div className="container px-2 sm:px-4   lg:px-6  mx-auto">
        {children}
      </div>
    </section>
  );
};

export default ContainerWrapper;
