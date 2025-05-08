import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import CartItem from "./CartItem";

const CartCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Cart</CardTitle>
        <CardDescription>your Cart list</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </CardContent>
    </Card>
  );
};

export default CartCard;
