import { Code, Database, Layout } from "lucide-react";
import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Junior Web Developer</h3>

            <p className="text-muted-foreground">
              Junior web developer with over one year of hands-on professional
              experience in a software development environment.
            </p>

            <p className="text-muted-foreground">
              Experience includes contributing to a large-scale e-commerce
              system built on a 10+ year legacy codebase, focusing on bug fixes,
              small to medium feature implementation, client-specific
              customizations, and basic QA support through a ticket-based
              workflow.
            </p>

            <p className="text-muted-foreground">
              Currently expanding technical breadth by learning and practicing
              React and TypeScript to strengthen frontend skills and improve
              effectiveness in full-stack development scenarios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="custom-button">
                Get In Touch
              </a>

              <a
                href="/src/assets/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Development</h4>
                  <p className="text-muted-foreground">
                    Experience with C#, ASP.NET development for a large-scale
                    legacy e-commerce systems
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Experience with frontend integration and UI adaptation,
                    involving layout reuse and adjustments, form and table reuse
                    based on existing modules.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Web Application Fundamentals
                  </h4>
                  <p className="text-muted-foreground">
                    General understanding of common web application workflows,
                    including authentication, CRUD operations, API consumption,
                    and how frontend features interact with backend logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
