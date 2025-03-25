const components = {
  a: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props} className="text-2xl font-extrabold no-underline">
      {children}
    </a>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
};

export default components;
