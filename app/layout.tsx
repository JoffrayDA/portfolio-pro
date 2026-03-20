import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joffray DeAlberto — Business Analyst · Data",
  description: "Portfolio de Joffray DeAlberto, Business Analyst & Data. Cadrage, livrables BA, dashboards Power BI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
