import Image from "next/image";
import Link from "next/link";

import Logo from "../assets/images/Logo.png";
import Git from "../assets/icons/mark-github-24.svg";
import Linkedin from "../assets/icons/Linkedin.svg";

export function Header() {
  return (
    <div className="w-full h-28 bg-[#212121] flex justify-between items-center p-8">
      <div className=" flex items-center">
        <Image src={Logo} alt="logo" width={200} />
      </div>
      <div className="flex space-x-24">
        <Link href="/">
          <h2 className="text-gray-300 font-medium hover:border-b-2 hover:border-green-600">
            Projetos
          </h2>
        </Link>
        <Link href="/">
          <h2 className="text-gray-300 font-medium hover:border-b-2 hover:border-green-600">
            Tecnologias
          </h2>
        </Link>
        <Link href="/">
          <h2 className="text-gray-300 font-medium hover:border-b-2 hover:border-green-600">
            Sobre mim
          </h2>
        </Link>
      </div>
    </div>
  );
}
