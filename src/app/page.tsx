import { AboutSection } from "@/components/AboutSection";
import { PresentationSection } from "@/components/PresentationSection";
import { ProjectSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  bg-[#212121] p-8">
      <PresentationSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </div>
  );
}
