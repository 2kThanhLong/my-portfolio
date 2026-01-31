import React, { useState } from "react";
import { cn } from "../lib/utils";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiDotnet } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

interface Skill {
  name: string;
  category: Exclude<SkillCategory, "all">;
  Icon: React.ComponentType<{ className?: string }>;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML5", category: "frontend", Icon: FaHtml5 },
  { name: "CSS3", category: "frontend", Icon: FaCss3Alt },
  { name: "JavaScript", category: "frontend", Icon: SiJavascript },
  { name: "React", category: "frontend", Icon: FaReact },
  { name: "TypeScript", category: "frontend", Icon: SiTypescript },

  // Backend
  { name: "C#", category: "backend", Icon: TbBrandCSharp },
  { name: "ASP.NET MVC", category: "backend", Icon: SiDotnet },
  { name: "ASP.NET Core", category: "backend", Icon: SiDotnet },
  { name: "ASP.NET Web Forms", category: "backend", Icon: SiDotnet },
  { name: "SQL Server", category: "backend", Icon: DiMsqlServer },

  // Tools
  { name: "Git", category: "tools", Icon: FaGitAlt },
  {
    name: "TFS / TFVC (Azure DevOps)",
    category: "tools",
    Icon: VscAzureDevops,
  },
];

const categories: SkillCategory[] = ["all", "frontend", "backend", "tools"];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full capitalize transition-colors cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 hover:bg-secondary",
              )}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map(({ name, Icon }) => (
            <div
              key={name}
              className={cn(
                "flex flex-col items-center gap-3 bg-card p-6 rounded-lg shadow-xs transition-shadow",
                "hover:shadow-md",
                "dark:hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]",
              )}>
              <Icon className="text-5xl text-primary" />
              <span className="text-sm text-center font-medium">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
