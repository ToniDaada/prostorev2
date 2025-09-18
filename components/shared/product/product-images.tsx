"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="space-y-4">
        <Image
          src={images[current]}
          alt="product image"
          width={1000}
          height={1000}
          className="min-h-[300px]  object-cover object-center"
        />

        <div className="flex">
          {images.map((data, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "border border-gray-200 mr-2 cursor-pointer hover:border-orange-600",
                current === index && "border-orange-500"
              )}
            >
              <Image
                src={data}
                alt={`${data} image`}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
