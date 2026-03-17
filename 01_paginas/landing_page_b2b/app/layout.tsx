import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colconexus Data Center SAS | Ingeniería de Precisión & IA",
  description: "Optimización industrial, escalabilidad masiva y blindaje de procesos con IA. Soluciones de alta fidelidad para el sector B2B.",
  icons: {
    icon: "/favicon.ico", // Updated as logos are removed
  },
  openGraph: {
    title: "Colconexus Data Center SAS | Agencia de IA Profesionales",
    description: "Agencia de IA con profesionales virtuales en tu PC. CRM, ERP, Telefonía y Bots 24/7.",
    siteName: "Colconexus Data Center SAS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
