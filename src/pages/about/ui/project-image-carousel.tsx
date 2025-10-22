"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { useEffect, useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

interface ProjectImageCarouselProps {
  images: ImageType[];
  initialSlide: string;
}

export default function ProjectImageCarousel({
  images,
  initialSlide,
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || !initialSlide) return;

    const initialIndex = images.findIndex((img) => img.alt === initialSlide);
    if (initialIndex !== -1) {
      api.scrollTo(initialIndex);
    }
  }, [api, initialSlide, images]);

  return (
    <div className="relative mx-auto max-h-[80vh] w-full max-w-xl overflow-y-auto">
      <Carousel setApi={setApi}>
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
