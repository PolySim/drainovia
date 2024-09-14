import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import WindowSizeInitializer from "@/initializer/WindowSizeInitializer";

export const metadata: Metadata = {
  title: "Drainovia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <WindowSizeInitializer />
      <body className="flex min-h-screen w-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
