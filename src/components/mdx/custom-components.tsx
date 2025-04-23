const components = {
  a: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a
      href={href}
      {...props}
      className="font-extrabold text-inherit no-underline"
    >
      {children}
    </a>
  ),

  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold [&_a]:text-inherit">{children}</h2>
  ),

  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold [&_a]:text-inherit">{children}</h3>
  ),

  p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
};

export default components;
