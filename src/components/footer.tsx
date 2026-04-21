export function Footer() {
  return (
    <footer className="py-10 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs text-muted opacity-50">
          © {new Date().getFullYear()} Thiago Minguim
        </p>
      </div>
    </footer>
  );
}
