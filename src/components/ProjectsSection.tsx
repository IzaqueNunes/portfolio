import { PROJECT_CARDS as Projects } from "@/utils/data";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <div className="w-full h-screen">
      <h2 className="font-bold text-3xl text-white text-center">Projetos</h2>
      <h4 className="text-center text-gray-300 mt-4">
        Clique em um projeto para vê-lo em meu repositório.
      </h4>
      <div className="mt-8 h-full flex  justify-center">
        <ProjectCard data={Projects} />
      </div>
    </div>
  );
}
