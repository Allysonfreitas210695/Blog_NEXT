type AvataContainerProps = {
  children: React.ReactNode;
};

export const AvataContainer = ({ children }: AvataContainerProps) => {
  return <div className="flex items-center gap-3">{children}</div>;
};