import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Minguim — Full-Stack Developer",
  description:
    "Desenvolvedor Full-Stack especialista em JavaScript/TypeScript com +4 anos de experiência em sistemas financeiros de alta complexidade.",
  keywords: [
    "Thiago Minguim",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
