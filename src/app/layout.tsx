import "@/styles/globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: "MovieDB App",
  description: "A web app for enjoy movie !",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
