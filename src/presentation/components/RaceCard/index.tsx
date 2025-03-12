import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

interface CardProps {
  index: string;
  name: string;
}

export const RaceCard = ({ index, name }: CardProps) => {
  return (
    <Link
      href={`/races/${index}`}
      className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center gap-2"
    >
      <BsPersonCircle size={32} />
      <span>{name}</span>
    </Link>
  );
};
