import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[72px] font-medium tracking-tight text-foreground leading-none mb-4">
        404
      </h1>
      <p className="text-muted mb-8 max-w-sm">
        Essa rota não existe. Volta pra home ou me avisa se achou um bug.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-lg bg-foreground text-background text-[14px] font-medium hover:opacity-90 transition-opacity"
      >
        Voltar pro início
      </Link>
    </div>
  );
}
