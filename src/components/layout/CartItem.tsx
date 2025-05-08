import Image from "next/image";
import React from "react";

import food from "@/assets/food/food-img-1.png";
import { CircleX } from "lucide-react";
const CartItem = () => {
  return (
    <div className="flex gap-4 ">
      <div className="flex items-center p-2 bg-white rounded-lg shadow-md">
        <Image src={food} alt="food" className="w-12 h-12 " />
      </div>
      <div className="">
        <h1 className="text-lg font-semibold text-foreground">Product Name</h1>
        <p className="text-muted-foreground">1 X $14.99</p>
      </div>
      <div className="">
        <CircleX />
      </div>
    </div>
  );
};

export default CartItem;
