import HadingTitle from "@/components/ui/hading-title";
import React from "react";
import BlogCard from "./BlogCard";

const BlogItem = [
  {
    title: "the fresh new wine Stories",
    date: "june 20, 2023",
    image: "/images/blog/blog1.jpg",
    alt: "",
  },
  {
    title: "the fresh new wine Stories",
    date: "june 20, 2023",
    image: "/images/blog/blog2.jpg",
    alt: "",
  },
  {
    title: "the fresh new wine Stories",
    date: "june 20, 2023",
    image: "/images/blog/blog3.jpg",
    alt: "",
  },
  {
    title: "the fresh new wine Stories",
    date: "june 20, 2023",
    image: "/images/blog/blog4.jpg",
    alt: "",
  },
];
const Blog = () => {
  return (
    <div>
      <HadingTitle hadingTitle="este 1940" title="the fresh new wine Stories" />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {BlogItem.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
