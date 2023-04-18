import { ABOUT_CARDS as SociaisNetwork } from "@/utils/data";
import { AboutCard } from "./AboutCard";

export function AboutSection() {
  return (
    <div className="w-full h-screen ">
      <h2 className="font-bold text-3xl text-white text-center">Sobre mim</h2>
      <div className="h-full flex flex-col items-center justify-center gap-44">
        <h4 className=" text-gray-300 text-lg text-center">
          Sou graduando em Sistemas de Informação e sempre amei tudo relacionado
          a tecnologia. Com mais de 2 anos de experiência como programador hoje
          busco aplicar minha competência e conhecimentos obtidos através de
          empenho e dedicação no desenvolvimento Front end, web e mobile.
        </h4>

        <div className="w-full flex justify-center ">
          <AboutCard data={SociaisNetwork} />
        </div>
      </div>
    </div>
  );
}
