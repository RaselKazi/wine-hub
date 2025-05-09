import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  alt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image, alt }) => {
  return (
    <div className=" group">
      <div className="w-full h-45 overflow-hidden ">
        <Image
          width={300}
          height={300}
          src={image}
          alt={alt}
          className="w-full h-45 object-cover group-hover:scale-110 duration-300"
        />
      </div>

      <h1 className="text-lg md:text-2xl font-semibold text-center   p-4">
        {title}
      </h1>
      <p className="text-sm text-slate-500 border-t-2 border-b-2 border-slate-100 py-1 px-4 text-center capitalize">
        {date}
      </p>
    </div>
  );
};

export default BlogCard;
