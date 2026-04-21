import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiago Minguim",
  description: "Dev full-stack — JavaScript / TypeScript",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full font-sans text-[15px] leading-[1.65]">
        {children}
      </body>
    </html>
  );
}
