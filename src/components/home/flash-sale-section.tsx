"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import ProductCarousel from "../ui/product/flashsale-product-carousel";

const products = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    originPrice: 2500000,
    salePrice: 1990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 320,
    rating: 4.5,
  },
  {
    id: "2",
    name: "Smart Watch Series 7",
    originPrice: 6000000,
    salePrice: 4790000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 540,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Minimal Sofa",
    originPrice: 12000000,
    salePrice: 8990000,
    discountPercent: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 210,
    rating: 4.3,
  },
  {
    id: "4",
    name: "Fashion Sneakers",
    originPrice: 1800000,
    salePrice: 1290000,
    discountPercent: 28,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 890,
    rating: 4.8,
  },
  {
    id: "5",
    name: "Gaming Laptop X1",
    originPrice: 28000000,
    salePrice: 23900000,
    discountPercent: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 110,
    rating: 4.6,
  },
  {
    id: "6",
    name: "Ergonomic Office Chair",
    originPrice: 7500000,
    salePrice: 5990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 480,
    rating: 4.4,
  },
  {
    id: "7",
    name: "Ergonomic Office Chair",
    originPrice: 7500000,
    salePrice: 5990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 480,
    rating: 4.4,
  },
  {
    id: "8",
    name: "Ergonomic Office Chair",
    originPrice: 7500000,
    salePrice: 5990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 480,
    rating: 4.4,
  },
  {
    id: "9",
    name: "Ergonomic Office Chair",
    originPrice: 7500000,
    salePrice: 5990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 480,
    rating: 4.4,
  },
  {
    id: "10",
    name: "Ergonomic Office Chair",
    originPrice: 7500000,
    salePrice: 5990000,
    discountPercent: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500",
    sold: 480,
    rating: 4.4,
  },
];

export default function ClientFlashsaleSection() {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <Card className="border-0 shadow-none dark:bg-gray-950 rounded-t-2xl p-0 bg-card-0 gap-0">
      <CardHeader className="flex items-center justify-between bg-white p-4 border-b-1">
        <h1 className="font-spring text-2xl text-gray-900 dark:text-gray-100">
          FLASH SALE
        </h1>
        <div className="flex items-center gap-2 text-sm font-semibold text-white bg-black px-3 py-1 rounded-lg">
          {formatTime(timeLeft)}
        </div>
      </CardHeader>

      <CardContent className="p-0 ">
        <ProductCarousel products={products} />
      </CardContent>
    </Card>
  );
}
