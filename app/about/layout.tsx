export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mb-12 mt-20 w-full max-w-[700px]">{children}</main>
  );
}
