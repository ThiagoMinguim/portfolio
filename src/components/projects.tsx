"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Compliance Dashboard",
    company: "DoubleCheck",
    description:
      "Plataforma de compliance e gestão de risco. Dashboard pesado, muita tela de análise, estado grande controlado com Dva/Sagas.",
  },
  {
    title: "Klever Browser Extension",
    company: "Klever",
    description:
      "Extensão de navegador pra carteira crypto da Klever. Tipo MetaMask, mas pra outra rede. Foco em UI rápida e segura conversando com contrato.",
  },
  {
    title: "Fintech Analytics",
    company: "Ceres Investimentos",
    description:
      "Dashboards pra mostrar dado de CRA e FIDC pros investidores. Vue + Nuxt consumindo API REST interna.",
  },
  {
    title: "Portfolio pessoal",
    company: "esse aqui",
    description:
      "Esse site mesmo. Next.js, Tailwind e Framer Motion. Feito pra carregar rápido e não encher o saco.",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted mt-10 mb-3">
            Projetos
          </p>

          <p className="text-[14px] text-muted mb-8">
            Quase tudo que trampei foi em produto fechado, então não tenho como
            abrir código. Mas aqui vai o que rolou em cada um.
          </p>

          <div>
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={i > 0 ? "border-t border-border pt-6 mt-6" : ""}
              >
                <div className="flex items-baseline justify-between gap-4 mb-1.5">
                  <h3 className="font-medium">{project.title}</h3>
                  <span className="text-[13px] text-tertiary shrink-0">
                    {project.company}
                  </span>
                </div>
                <p className="text-[14px] text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
