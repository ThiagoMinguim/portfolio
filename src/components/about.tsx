"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted mt-10 mb-5">
            Sobre
          </p>

          <div className="space-y-4 text-muted">
            <p>
              Comecei na área em 2021 na Ceres Investimentos, mexendo com Vue e
              Nuxt em dashboard de CRA e FIDC. Depois fui pra Klever, onde passei
              quase 2 anos trampando numa extensão de navegador tipo MetaMask, mas
              pra rede Klever.
            </p>
            <p>
              Nos últimos 2 anos fui dev na DoubleCheck, construindo os módulos de
              Compliance e Gestão de Risco. Stack principal hoje é React +
              TypeScript, e gosto de UI com muito dado e muita interação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
