import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import WindowSizeInitializer from "@/initializer/WindowSizeInitializer";
import { Toaster } from "@/components/ui/toaster";

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
      <body className="flex min-h-screen w-screen overflow-x-hidden">
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
