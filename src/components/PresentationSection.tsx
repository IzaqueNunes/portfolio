import Image from "next/image";

import Me from "../assets/images/me.png";
import Drawing from "../assets/images/drawing.svg";
import { PrimaryButton } from "./PrimaryButton";
import { OutlineButton } from "./OutlineButton";

export function PresentationSection() {
  return (
    <div className="flex h-screen items-center">
      <div className="flex flex-col h-96 flex-1">
        <div className="space-y-6 ">
          <h4 className="font-bold text-white text-5xl">
            Olá, eu sou o Izaque
          </h4>
          <h4 className="font-semibold text-gray-300 text-lg">
            Desenvolvedor Front end
          </h4>
        </div>
        <div className="flex gap-4 mt-8 h-12 pr-8">
          <PrimaryButton label="Baixe meu currículo" />
          <OutlineButton label="Mais sobre mim" />
        </div>
      </div>
      <div>
        <Image
          src={Me}
          alt="me"
          className="absolute"
          width={300}
          height={300}
        />
        <Image src={Drawing} alt="me" width={400} height={300} />
      </div>
    </div>
  );
}
