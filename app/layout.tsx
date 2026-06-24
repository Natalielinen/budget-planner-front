import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./widgets";

const nunito = Nunito({ subsets: ["latin", "cyrillic", "latin-ext"] });

export const metadata: Metadata = {
  title: "Планировщик бюджета",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
