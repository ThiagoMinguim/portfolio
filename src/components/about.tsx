"use client";

import { FadeIn } from "./motion";
import { Code2, Server, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Front-End",
    description:
      "Interfaces de alta performance com React, Next.js e Vue.js. Dashboards interativos e UIs complexas para tomada de decisão.",
  },
  {
    icon: Server,
    title: "Back-End",
    description:
      "APIs RESTful robustas com Node.js. Integração de sistemas, arquitetura de dados e fluxos seguros de informação.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    description:
      "Visão end-to-end do produto. Do design técnico ao deploy, passando por arquitetura, performance e qualidade de código.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-accent-light text-sm font-mono mb-3">// sobre mim</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Construindo software que{" "}
            <span className="gradient-text">faz a diferença</span>
          </h2>
        </FadeIn>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Sou desenvolvedor Full-Stack com mais de 4 anos de experiência,
                especializado no ecossistema JavaScript/TypeScript. Minha
                trajetória é focada na criação de{" "}
                <span className="text-foreground">
                  sistemas financeiros de alta complexidade
                </span>
                , onde precisão e performance são essenciais.
              </p>
              <p>
                Já atuei em empresas nos mercados de{" "}
                <span className="text-foreground">Compliance</span>,{" "}
                <span className="text-foreground">Web3/Blockchain</span> e{" "}
                <span className="text-foreground">Agro/Investimentos</span>,
                sempre entregando soluções escaláveis com código limpo e
                arquitetura bem pensada.
              </p>
              <p>
                Meu diferencial é a capacidade de transitar entre front e back
                com fluência, entendendo o produto de ponta a ponta e tomando
                decisões técnicas que impactam diretamente o negócio.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={0.15 + i * 0.1} direction="left">
                <div className="group p-5 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:glow">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent-light">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
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
