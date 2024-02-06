import "@/styles/globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import RootLayoutProvider from "@/components/root-layout-provider";

export const metadata: Metadata = {
  title: "MovieDB App",
  description: "A web app for enjoy movie !",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="text-foreground bg-background">
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
