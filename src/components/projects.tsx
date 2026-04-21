"use client";

const projects = [
  {
    title: "Compliance Dashboard",
    description: "Painel pra equipe de compliance acompanhar riscos. Muito estado, muita tabela, muitos filtros.",
    tech: "React · UmiJS · TypeScript · Node.js",
    company: "DoubleCheck",
  },
  {
    title: "Klever Browser Extension",
    description: "Extensão pra mexer com cripto — enviar, receber, interagir com smart contracts.",
    tech: "React · Next.js · TypeScript · Web3",
    company: "Klever",
  },
  {
    title: "Painel de Investimentos",
    description: "Dashboards pra acompanhar CRAs e FIDCs. Dados de várias APIs em gráficos e tabelas.",
    tech: "Vue.js · Nuxt.js · Vuetify",
    company: "Ceres",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold mb-8">Projetos</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-medium text-[15px]">{project.title}</h3>
                <span className="text-xs text-muted shrink-0">{project.company}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-muted opacity-60 mt-1">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
