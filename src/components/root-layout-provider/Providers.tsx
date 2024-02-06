"use client";
import { ReactNode } from "react";
import { buildProvidersTree } from "@/utils";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: ReactNode }) {
  const ProviderTree = buildProvidersTree([[NextUIProvider, {}]]);
  return <ProviderTree>{children}</ProviderTree>;
}
