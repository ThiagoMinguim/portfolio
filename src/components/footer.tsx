export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Thiago Minguim
        </p>
        <p className="text-sm text-muted">
          Next.js + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}
