"use client";

import { motion } from "framer-motion";

const categories = [
  { label: "Linguagens", items: ["JavaScript", "TypeScript"] },
  { label: "Front-end", items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Zustand"] },
  { label: "Back-end", items: ["Node.js", "APIs RESTful"] },
  { label: "UI", items: ["Tailwind CSS", "Styled Components", "Ant Design", "Vuetify", "Material UI"] },
  { label: "Ferramentas", items: ["Git", "GitHub", "GitLab", "Jira", "Jest", "VS Code"] },
  { label: "Metodologias", items: ["Agile", "Scrum"] },
];

export function Skills() {
  return (
    <section id="stack" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-border" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-muted mt-10 mb-8">
            Stack
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p className="text-[13px] text-tertiary mb-2">{cat.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-0.5 text-[12px] rounded-md border border-border text-muted bg-background"
                    >
                      {item}
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
