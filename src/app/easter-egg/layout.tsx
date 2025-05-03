export default function EasterEggLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main className="mt-12">{children}</main>
      </body>
    </html>
  );
}
