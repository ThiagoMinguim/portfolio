"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-28 pb-12 px-6">
      <div className="max-w-3xl mx-auto flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-[13px] text-muted mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Disponível pra projetos
          </div>

          <h1 className="text-[32px] font-medium leading-tight tracking-tight mb-4">
            Oi, sou o Thiago
          </h1>

          <p className="text-muted max-w-lg">
            Dev full-stack há 5 anos, focado em React e TypeScript. Já trampei
            com fintech, crypto e agro, sempre em produto onde UI complicada faz
            diferença.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#contato"
              className="px-5 py-2.5 rounded-lg bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity"
            >
              Fale comigo
            </a>
            <a
              href="#projetos"
              className="px-5 py-2.5 rounded-lg border border-border text-[14px] font-medium text-foreground hover:bg-surface transition-colors"
            >
              Ver projetos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="shrink-0"
        >
          <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden">
            <Image
              src="/photo.jpeg"
              alt="Thiago Minguim"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
