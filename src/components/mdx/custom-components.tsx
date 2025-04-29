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

  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="text-3xl font-bold [&_a]:text-inherit">
      {children}
    </h2>
  ),

  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
  } & React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="text-xl font-semibold [&_a]:text-inherit">
      {children}
    </h3>
  ),

  p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
};

export default components;
