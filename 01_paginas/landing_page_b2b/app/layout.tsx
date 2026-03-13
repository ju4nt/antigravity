import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Colconexus Data Center SAS | Agencia de IA Profesionales",
  description: "Especialistas en Data Business con Agentes IA, Plantas Telefónicas VoIP, Desarrollo de Apps y Automatizaciones Empresariales a medida.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
