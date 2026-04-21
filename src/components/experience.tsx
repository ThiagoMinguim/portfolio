"use client";

const experiences = [
  {
    company: "DoubleCheck",
    role: "Full-Stack",
    period: "2024 — 2026",
    description:
      "Plataforma de compliance e gestão de riscos. React/UmiJS no front, Node.js no back, tudo via APIs REST.",
    tech: ["React.js", "UmiJS", "Node.js", "TypeScript", "Dva.js", "Ant Design"],
  },
  {
    company: "Klever",
    role: "Full-Stack",
    period: "2022 — 2024",
    description:
      "Extensão de navegador pra cripto. Fazia a UI e a integração com smart contracts e redes Blockchain.",
    tech: ["React", "Next.js", "TypeScript", "Web3", "Tailwind CSS"],
  },
  {
    company: "Ceres Investimentos",
    role: "Full-Stack",
    period: "2021 — 2022",
    description:
      "Dashboards de dados financeiros (CRAs e FIDCs). Integração de APIs e interfaces com Vue.js e Nuxt.js.",
    tech: ["Vue.js", "Nuxt.js", "React.js", "Next.js", "Vuetify"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold mb-8">Experiência</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-medium">{exp.company}</h3>
                  <span className="text-sm text-muted">· {exp.role}</span>
                </div>
                <span className="text-sm text-muted shrink-0">{exp.period}</span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-2">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-muted opacity-60"
                  >
                    {t}{exp.tech.indexOf(t) < exp.tech.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
