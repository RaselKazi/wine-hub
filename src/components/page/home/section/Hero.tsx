"use client";

import ContainerWrapper from "@/components/ui/container-wrapper";

interface HeroProps {
  autoplay?: boolean;
}

// Main Component
const Hero: React.FC<HeroProps> = () => {
  return (
    <ContainerWrapper>
      <section
        id="home"
        className="relative w-full overflow-hidden bg-rose-700 rounded-2xl mt-20 my-4 md:h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6"></div>
      </section>
    </ContainerWrapper>
  );
};

export default Hero;
