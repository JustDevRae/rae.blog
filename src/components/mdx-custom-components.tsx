import Image from "next/image";

export const components = {
  MDXImage: ({ src, alt }: React.ComponentProps<typeof Image>) => {
    return (
      <Image src={src} alt={alt} width={1000} height={600} className="m-0" />
    );
  },
  MDXLink: ({ href, label }: { href: string; label: string }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline underline"
      >
        {label}
      </a>
    );
  },
};
