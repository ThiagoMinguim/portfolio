"use client";

import { FadeIn, ScaleIn } from "./motion";

const skillCategories = [
  {
    title: "Linguagens",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Front-End",
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "UmiJS"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "APIs RESTful"],
  },
  {
    title: "UI / Estilo",
    skills: [
      "Tailwind CSS",
      "Styled Components",
      "Ant Design",
      "Vuetify",
      "Material UI",
    ],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Jest", "VS Code"],
  },
  {
    title: "Metodologias",
    skills: ["Agile", "Scrum"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="gradient-text">Tecnologias</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <ScaleIn key={category.title} delay={i * 0.08}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:glow h-full">
                <h3 className="text-sm font-mono text-accent-light mb-4 uppercase tracking-wider">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-foreground hover:border-accent/40 hover:text-accent-light transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
