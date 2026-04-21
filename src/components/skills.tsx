"use client";

const skills = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Vue.js", "Nuxt.js",
  "Node.js", "Tailwind CSS", "Ant Design", "Git", "Jest", "REST APIs",
];

export function Skills() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-lg font-semibold mb-4">Stack</h2>
        <p className="text-sm text-muted leading-relaxed">
          {skills.join(" · ")}
        </p>
      </div>
    </section>
  );
}
