import { PROGRESS_BAR } from "@/utils/data";
import { ProgressBar } from "./ProgressBar";

export function SkillsSection() {
  return (
    <div className="w-full h-screen space-y-28">
      <h2 className="font-bold text-3xl text-white text-center">
        Minhas habilidades
      </h2>

      <div className="flex flex-col  mt-16">
        <ProgressBar data={PROGRESS_BAR} />
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-xl text-white">
          Tecnologias e Habilidades extras
        </h2>
        <ol className="text-gray-300">
          <li>Git</li>
          <li>Clean code</li>
          <li>Inglês intermediário</li>
          <li>Trabalho em equipe</li>
          <li>Comunicação interpessoal</li>
          <li>Proatividade</li>
        </ol>
      </div>
    </div>
  );
}
