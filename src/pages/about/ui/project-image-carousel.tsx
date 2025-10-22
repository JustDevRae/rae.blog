"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";

interface ProjectImageCarouselProps {
  images: { src: string; alt: string }[];
  initialSlide?: string;
}

export default function ProjectImageCarousel({
  images,
  initialSlide = "",
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (api && initialSlide !== undefined) {
      api.scrollTo(initialSlide);
    }
  }, [api, initialSlide]);

  return (
    <div className="relative mx-auto max-h-[80vh] w-full max-w-xl overflow-y-auto">
      <Carousel setApi={setApi} opts={{ initialSlide: initialSlide }}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.alt}>
              <div className="flex h-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  layout="responsive"
                  objectFit="contain"
                  className="max-h-[70vh] w-auto rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
