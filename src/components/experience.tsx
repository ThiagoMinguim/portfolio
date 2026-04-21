"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "DoubleCheck",
    role: "Dev full-stack",
    period: "Mai 2024 — Mar 2026",
    description:
      "Módulos de Compliance e Gestão de Risco. Dashboard pesado, muito estado pra sincronizar, integração com Node.",
    tech: ["React", "TypeScript", "UmiJS", "Dva.js", "Ant Design", "Node.js"],
  },
  {
    company: "Klever",
    role: "Dev full-stack",
    period: "Abr 2022 — Fev 2024",
    description:
      "Extensão de navegador da Klever, tipo MetaMask mas pra rede Klever e outras blockchains. Foco em UI rápida e segura conversando com smart contract.",
    tech: ["React", "Next.js", "TypeScript", "Web3", "Tailwind"],
  },
  {
    company: "Ceres Investimentos",
    role: "Dev full-stack",
    period: "Mai 2021 — Abr 2022",
    description:
      "Dashboards de CRA e FIDC pros investidores. Primeiro trampo real na área, onde aprendi Git em time, PR e code review na marra.",
    tech: ["Vue.js", "Nuxt.js", "Vuetify", "Material UI"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted mt-10 mb-8">
            Experiência
          </p>

          <div>
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={i > 0 ? "border-t border-border pt-6 mt-6" : ""}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <div className="flex items-baseline gap-1.5">
                    <h3 className="font-medium">{exp.company}</h3>
                    <span className="text-[14px] text-muted">
                      — {exp.role}
                    </span>
                  </div>
                  <span className="text-[13px] text-tertiary shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-[14px] text-muted leading-relaxed mb-3">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[12px] rounded-md border border-border text-muted bg-background"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
