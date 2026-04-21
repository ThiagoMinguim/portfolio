"use client";

export function Contact() {
  return (
    <section id="contato" className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="border-t border-border my-6" />
        <p className="text-sm text-muted">
          Quer trocar uma ideia?{" "}
          <a
            href="mailto:thiago.minguim@gmail.com"
            className="text-foreground underline decoration-border hover:decoration-foreground transition-colors"
          >
            thiago.minguim@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
