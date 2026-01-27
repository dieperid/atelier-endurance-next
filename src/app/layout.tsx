import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/header";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atelier de l'Endurance",
  description: "Website of the Atelier Endurance project",
  icons: {
    icon: "/assets/img/logo_trans.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${montserrat.className} antialiased`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
