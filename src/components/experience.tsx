"use client";

import { FadeIn } from "./motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "DoubleCheck",
    role: "Desenvolvedor Full-Stack",
    period: "Mai 2024 — Mar 2026",
    description:
      "Plataforma de compliance e gestão de riscos. Eu cuidava do front com React/UmiJS e do back com Node.js, tudo conectado via APIs REST.",
    highlights: [
      "Gerenciamento de estado com Dva.js (Redux/Sagas) em fluxos bem pesados",
      "Construí os dashboards que o time de compliance usava pra tomar decisão",
      "Conectei o front com a lógica de negócio do servidor de ponta a ponta",
    ],
    tech: ["React.js", "UmiJS", "Node.js", "TypeScript", "Dva.js", "Ant Design"],
  },
  {
    company: "Klever",
    role: "Desenvolvedor Full-Stack",
    period: "Abr 2022 — Fev 2024",
    description:
      "Extensão de navegador pra interagir com Blockchain. Fazia a ponte entre a interface em React/Next.js e os smart contracts.",
    highlights: [
      "Integrei a UI com smart contracts e redes Blockchain",
      "Otimizei performance da extensão usando TypeScript e Tailwind",
      "Participei ativamente de code reviews e decisões de arquitetura",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web3", "Blockchain"],
  },
  {
    company: "Ceres Investimentos",
    role: "Desenvolvedor Full-Stack",
    period: "Mai 2021 — Abr 2022",
    description:
      "Dashboards pra visualização de dados financeiros (CRAs e FIDCs). Trabalhei junto com o time de dados e backend na integração das APIs.",
    highlights: [
      "Integrei APIs REST pra puxar e exibir dados financeiros",
      "Montei interfaces com Vue.js (Composition API) e Nuxt.js",
      "Usei Vuetify e Material UI pra manter o padrão visual do produto",
    ],
    tech: ["Vue.js", "Nuxt.js", "React.js", "Next.js", "Vuetify", "Material UI"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Por onde <span className="gradient-text">passei</span>
          </h2>
        </FadeIn>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company} delay={i * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background" />

                  <div className="group p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:glow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 size={16} className="text-accent-light" />
                          <h3 className="text-xl font-bold">{exp.company}</h3>
                        </div>
                        <p className="text-accent-light font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="text-accent mt-1.5 shrink-0">
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent-light border border-accent/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
