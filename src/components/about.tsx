"use client";

export function About() {
  return (
    <section id="sobre" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="border-t border-border my-6" />

        <div className="space-y-3 text-muted leading-relaxed text-[15px]">
          <p>
            Já passei por <span className="text-foreground">Compliance/Risco</span>,{" "}
            <span className="text-foreground">Web3/Blockchain</span> e{" "}
            <span className="text-foreground">Agro/Investimentos</span>.
            Em todas eu mexia tanto no front quanto no back, então acabei
            pegando uma boa noção do fluxo inteiro.
          </p>
          <p>
            Gosto de entender o contexto do que estou construindo, não só
            receber ticket e codar.
          </p>
        </div>
      </div>
    </section>
  );
}
