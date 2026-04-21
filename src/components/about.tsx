"use client";

import { FadeIn } from "./motion";
import { Code2, Server, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Front-End",
    description:
      "React, Next.js, Vue.js — dashboards, painéis administrativos e interfaces que lidam com muitos dados sem travar.",
  },
  {
    icon: Server,
    title: "Back-End",
    description:
      "Node.js e APIs REST. Já integrei desde serviços internos até sistemas de terceiros com regras de negócio pesadas.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    description:
      "Consigo pegar uma feature do banco de dados até o botão na tela. Menos dependência entre times, entrega mais rápida.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Quem sou <span className="gradient-text">eu</span>
          </h2>
        </FadeIn>

        <div className="mt-8 grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Tenho +4 anos trabalhando com JavaScript/TypeScript. A maior
                parte desse tempo foi em{" "}
                <span className="text-foreground">
                  fintechs e sistemas financeiros
                </span>
                 — dashboards de compliance, plataformas de investimento, esse
                tipo de coisa.
              </p>
              <p>
                Já passei por{" "}
                <span className="text-foreground">Compliance/Risco</span>,{" "}
                <span className="text-foreground">Web3/Blockchain</span> e{" "}
                <span className="text-foreground">Agro/Investimentos</span>.
                Em todas eu mexia tanto no front quanto no back, então acabei
                pegando uma boa noção do fluxo inteiro.
              </p>
              <p>
                Gosto de entender o contexto do que estou construindo, não só
                receber ticket e codar. Isso me ajuda a tomar decisões melhores
                no dia a dia.
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
