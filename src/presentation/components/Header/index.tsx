import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import Image from "next/image";

const headerOptions = [
  { label: "Races", path: "/races" },
  { label: "Classes", path: "/classes" },
];

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b fixed w-full">
      <nav className="flex items-center gap-4">
        <Link
          href={"/"}
          className="pr-8"
        >
          <Image
            src="/DD-logo.png"
            alt="DeD logo"
            layout="intrinsic"
            width={120}
            height={30}
          />
        </Link>
        {headerOptions.map((option) => (
          <Link
            key={option.label}
            href={option.path}
            className="flex items-center py-2 px-6 hover:bg-gray-800 rounded-xl"
          >
            {option.label}
          </Link>
        ))}
      </nav>
      <span className="cursor-pointer">
        <MdOutlineDarkMode size={24}/>
      </span>
    </div>
  );
};
