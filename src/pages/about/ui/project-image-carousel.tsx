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
import { ProjectImage } from "@/shared/model/project-data.type";

interface ProjectImageCarouselProps {
  images: ProjectImage[];
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
    <Carousel setApi={setApi} className="mx-auto h-full w-full max-w-xl">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.alt}>
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              layout="responsive"
              objectFit="contain"
              className="max-h-[70vh] w-auto rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 top-1/2 -translate-y-1/2 tablet:-left-12" />
      <CarouselNext className="right-1 top-1/2 -translate-y-1/2 tablet:-right-12" />
    </Carousel>
  );
}
