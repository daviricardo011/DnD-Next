import { JSX } from "react";

interface SectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const DescriptionSection = ({ title, children }: SectionProps) => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold pb-1">{title}</h3>
      {children}
    </div>
  );
};
