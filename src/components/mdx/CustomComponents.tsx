const components = {
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-extrabold text-red-500">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-semibold text-green-500">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
};

export default components;
