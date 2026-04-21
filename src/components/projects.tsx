"use client";

import { FadeIn } from "./motion";
import { ExternalLink, Lock } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    title: "Compliance Dashboard",
    description:
      "Painel pra equipe de compliance acompanhar riscos e tomar decisões. Tinha bastante estado pra gerenciar (Redux/Sagas) e muita tabela com filtro e gráfico.",
    tech: ["React.js", "UmiJS", "TypeScript", "Dva.js", "Ant Design", "Node.js"],
    type: "DoubleCheck",
    private: true,
  },
  {
    title: "Klever Browser Extension",
    description:
      "Extensão de navegador pra mexer com cripto — enviar, receber, interagir com smart contracts. Eu fazia a UI e a integração com as redes Blockchain.",
    tech: ["React", "Next.js", "TypeScript", "Web3", "Tailwind CSS"],
    type: "Klever",
    private: true,
  },
  {
    title: "Painel de Investimentos",
    description:
      "Dashboards pra acompanhar CRAs e FIDCs. Puxava dados de várias APIs e montava os gráficos e tabelas que os analistas usavam no dia a dia.",
    tech: ["Vue.js", "Nuxt.js", "Vuetify", "APIs REST"],
    type: "Ceres Investimentos",
    private: true,
  },
  {
    title: "Este portfólio",
    description:
      "O site que você está vendo. Next.js, Tailwind e Framer Motion. Código aberto no GitHub.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ThiagoMinguim/portfolio",
    type: "Pessoal",
    private: false,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="gradient-text">Projetos</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            Os projetos profissionais são privados, mas dá pra ter uma ideia
            do que rolou em cada um.
          </p>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div className="group h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:glow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono text-muted bg-background px-3 py-1 rounded-full border border-border">
                    {project.type}
                  </span>
                  <div className="flex gap-2">
                    {project.private ? (
                      <div className="p-2 rounded-lg text-muted" title="Código privado">
                        <Lock size={16} />
                      </div>
                    ) : (
                      <>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all"
                            aria-label="GitHub"
                          >
                            <GithubIcon size={16} />
                          </a>
                        )}
                        <a
                          href="#"
                          className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card-hover transition-all"
                          aria-label="Link externo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-background text-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
