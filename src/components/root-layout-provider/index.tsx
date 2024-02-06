"use client";
import { ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";
import Providers from "./Providers";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "remixicon/fonts/remixicon.css";

interface Props {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: Props) {
  const [open, setOpen] = useLocalStorage("is-sidebar-open", false);

  return (
    <Providers>
      <Header open={open} />
      <Sidebar open={open} />
      <main
        className="float-right bg-background"
        style={{
          width: open
            ? `calc(100% - var(--sidebar-open-width))`
            : `calc(100% - var(--sidebar-close-width))`,
          height: `calc(100% - var(--header-height))`,
          marginTop: "var(--header-height)",
        }}
      >
        {children}
      </main>
    </Providers>
  );
}
