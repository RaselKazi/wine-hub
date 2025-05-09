import CustomProducts from "@/components/page/home/section/CustomProducts";
import Hero from "@/components/page/home/section/Hero";
import WineMaking from "@/components/page/home/section/WineMaking";
import WinesProducts from "@/components/page/home/section/WinesProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <CustomProducts />
      <WinesProducts />
      <WineMaking />
    </div>
  );
}
