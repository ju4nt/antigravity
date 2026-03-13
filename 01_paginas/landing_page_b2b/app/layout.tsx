import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colconexus Datacenter SAS | Agencia de IA Profesionales",
  description: "Especialistas en Data Business (IA & Agentes), Plantas Telefónicas, Desarrollo de Apps y Integraciones B2B. Automatizamos y digitalizamos tu empresa.",
  keywords: "IA, agentes IA, CRM, ERP, plantas telefónicas, VoIP, desarrollo de apps, Colombia, Colconexus",
  authors: [{ name: "Colconexus Datacenter SAS" }],
  openGraph: {
    title: "Colconexus Datacenter SAS | Agencia de IA",
    description: "Automatizamos y digitalizamos tu empresa con IA, Telefonía y Apps a Medida.",
    locale: "es_CO",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
