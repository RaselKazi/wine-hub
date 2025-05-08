// heroBannerData.ts

import coffee from "@/assets/slider/coffee.png";
import burger from "@/assets/slider/burger.png";
import pizzaBig from "@/assets/slider/pizzaBig.png";
import dont from "@/assets/slider/dont.png";
import dont2 from "@/assets/slider/dont2.png";
import dont3 from "@/assets/slider/dont3.png";
import soda from "@/assets/slider/soda.png";
import soda2 from "@/assets/slider/soda2.png";
import soda3 from "@/assets/slider/soda3.png";
import soda4 from "@/assets/slider/soda4.png";
import cola from "@/assets/slider/cola.png";
import shap from "@/assets/slider/shap.png";
import shap2 from "@/assets/slider/shap2.png";
import shap3 from "@/assets/slider/shap3.png";

import yellow from "@/assets/slider/yellow.png";

export const heroBannerData = [
  {
    mainImage: pizzaBig,
    width: 800,
    subImages: [
      { src: soda, width: 100, alt: "Soda", offsetX: "-45%", offsetY: "-65%" },
      { src: soda2, width: 120, alt: "Soda", offsetX: "75%", offsetY: "-60%" },
      { src: soda3, width: 150, alt: "Soda", offsetX: "65%", offsetY: "60%" },
      { src: soda4, width: 120, alt: "Soda", offsetX: "-50%", offsetY: "34%" },
    ],
    decorativeElements: [
      {
        src: yellow,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "-10%",
        width: 500,
      },
      {
        src: shap,
        alt: "Decorative",
        offsetX: "-5%",
        offsetY: "-20%",
        width: 500,
      },
      {
        src: shap2,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "0%",
        width: 400,
      },
      {
        src: shap3,
        alt: "Decorative",
        offsetX: "-10%",
        offsetY: "10%",
        width: 400,
      },
    ],
    altText: "Pizza Banner",
    title: "1 larger",
    subTitle: "Pizza",
    offerDescription: "4 drinks",
    pickup: { amount: "3", price: ".99" },
    delivery: { amount: "5", price: ".99" },
    buttonText: "Order Now",
    buttonLink: "/",
  },
  {
    mainImage: burger,
    width: 600,
    subImages: [
      { src: cola, width: 100, alt: "Cola", offsetX: "35%", offsetY: "25%" },
    ],
    decorativeElements: [
      {
        src: yellow,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "-10%",
        width: 500,
      },
      {
        src: shap,
        alt: "Decorative",
        offsetX: "-5%",
        offsetY: "-20%",
        width: 500,
      },
      {
        src: shap2,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "0%",
        width: 400,
      },
      {
        src: shap3,
        alt: "Decorative",
        offsetX: "-10%",
        offsetY: "10%",
        width: 400,
      },
    ],
    altText: "Burger Banner",
    title: "Special",
    subTitle: "Combos Deals",
    offerDescription: "Mix or Match",
    pickup: { amount: "3", price: ".99" },
    delivery: { amount: "5", price: ".99" },
    buttonText: "Order Now",
    buttonLink: "/",
  },
  {
    mainImage: coffee,
    width: 400,
    subImages: [
      { src: dont, width: 180, alt: "Donut", offsetX: "-50%", offsetY: "35%" },
      { src: dont2, width: 180, alt: "Donut", offsetX: "65%", offsetY: "50%" },
      { src: dont3, width: 200, alt: "Donut", offsetX: "5%", offsetY: "70%" },
    ],
    decorativeElements: [
      {
        src: yellow,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "-10%",
        width: 500,
      },
      {
        src: shap,
        alt: "Decorative",
        offsetX: "-5%",
        offsetY: "-20%",
        width: 500,
      },
      {
        src: shap2,
        alt: "Decorative",
        offsetX: "10%",
        offsetY: "0%",
        width: 400,
      },
      {
        src: shap3,
        alt: "Decorative",
        offsetX: "-10%",
        offsetY: "10%",
        width: 400,
      },
    ],
    altText: "Breakfast Banner",
    title: "Breakfast",
    subTitle: "Special",
    offerDescription: "Get 1 Free",
    pickup: { amount: "3", price: ".99" },
    delivery: { amount: "5", price: ".99" },
    buttonText: "Order Now",
    buttonLink: "/",
  },
];
