import Image from "next/image";

export const components = {
  MDXImage: ({ src, alt }: React.ComponentProps<typeof Image>) => {
    return (
      <Image src={src} alt={alt} width={1000} height={600} className="m-0" />
    );
  },
};
