"use client";

import { useState, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button";
import ProductCard from "./product-card";
import useScreen from "@/hooks/useScreen";
import clsx from "clsx";
import { IProductCard } from "@/interfaces/products/IProductCardProps";

interface IProductCarouselProps {
  products: IProductCard[];
}

export default function ProductCarousel({
  products,
}: Readonly<IProductCarouselProps>) {
  const { isMobile, isTablet } = useScreen();

  const itemsPerView = useMemo(() => {
    if (isMobile) return 2;
    if (isTablet) return 4;
    return 6;
  }, [isMobile, isTablet]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(products.length / itemsPerView);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={clsx(
                "grid gap-4 w-full flex-shrink-0",
                itemsPerView === 2 && "grid-cols-2",
                itemsPerView === 4 && "grid-cols-4",
                itemsPerView === 6 && "grid-cols-6"
              )}
              style={{ width: `${100 / totalSlides}%` }}
            >
              {products
                .slice(
                  slideIndex * itemsPerView,
                  (slideIndex + 1) * itemsPerView
                )
                .map((p) => (
                  <ProductCard key={p.id} product={p} isFlashSale />
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        {currentIndex > 0 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            className="pointer-events-auto absolute left-0 top-1/3 -translate-y-1/2 -translate-x-1/2
                       z-50 rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}

        {currentIndex < totalSlides - 1 && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="pointer-events-auto absolute right-0 top-1/3 -translate-y-1/2 translate-x-1/2
                       z-50 rounded-full bg-white shadow-lg transition-transform duration-200 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* View all */}
      <div className="flex justify-center mt-6">
        <Button className="px-6 rounded-full font-semibold">View All</Button>
      </div>
    </div>
  );
}
