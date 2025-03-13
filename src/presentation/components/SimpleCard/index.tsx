import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  name: string;
  path: string;
  icon: ReactNode;
}

export const SimpleCard = ({ name, path, icon }: CardProps) => {
  return (
    <Link
      href={path}
      className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center gap-2"
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
};
