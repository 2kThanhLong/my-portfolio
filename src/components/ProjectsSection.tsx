import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "YapBook",
    description:
      "Real-time chat web application with separate desktop and mobile UI.",
    tags: ["React", "TypeScript", "Tailwind", "ASP.NET Core", "Web API"],
    githubUrl: "https://github.com/longnt3003/yap-book",
    status: "In Progress",
  },
  {
    id: 2,
    title: "TodoApp",
    description:
      "Full-stack todo app list with role-based auth access and management system.",
    tags: ["React", "TypeScript", "Tailwind", "ASP.NET Core", "Web API"],
    demoUrl: "#",
    githubUrl: "https://github.com/longnt3003/todo-app",
    status: "Completed",
  },
  {
    id: 3,
    title: "TopMarket",
    description:
      "Graduation project with separate admin and user site and full e-commerce featured system",
    tags: ["C#", "ASP.NET MVC", "EF6", "SQL Server"],
    demoUrl: "#",
    githubUrl: "https://github.com/longnt3003/top-market",
    status: "Completed",
  },
];

const statusClass = (status?: string) => {
  if (!status) return "bg-foreground/5 text-foreground/80";
  const s = status.toLowerCase();
  if (s.includes("completed") || s.includes("done") || s.includes("complete"))
    return "bg-green-100 text-green-700";
  if (
    s.includes("in progress") ||
    s.includes("progress") ||
    s.includes("in-progress")
  )
    return "bg-red-100 text-red-700";
  return "bg-foreground/5 text-foreground/80";
};

const getInitials = (title: string) => {
  const parts = title.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects that demonstrate end-to-end development, backend
          systems and modern frontend stacks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative min-h-80 pb-20">
              {project.image ? (
                <div className="h-44 overflow-hidden bg-muted-foreground/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div
                  className="h-44 flex items-center justify-center text-white text-2xl font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.15))",
                  }}>
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-linear-to-br from-primary to-secondary text-white text-lg shadow-md">
                    {getInitials(project.title)}
                  </div>
                </div>
              )}

              <div className="p-6 text-left">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.status && (
                    <span
                      className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full tracking-wide shadow-sm ${statusClass(
                        project.status,
                      )}`}>
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 mt-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute left-4 bottom-4 flex items-center gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground/5 text-foreground/80 hover:bg-primary/10 transition-colors"
                    aria-label={`${project.title} demo`}>
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-foreground/5 text-foreground/80 hover:bg-primary/10 transition-colors"
                    aria-label={`${project.title} source`}>
                    <FaGithub size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="custom-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/longnt3003">
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
