export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto mb-12 mt-20 w-full min-w-[340px] max-w-[700px] flex-grow px-4">
      {children}
    </main>
  );
}
