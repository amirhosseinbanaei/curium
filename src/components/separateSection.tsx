import React, { ReactNode } from "react";
import SideSpaceWrapper from "./sideSpaceWrapper";
import { cn } from "@/utils/cn.util";

interface SeparateSectionProps {
  children: ReactNode;
  className?: string;
  background: "black" | "black-primary" | "black-secondary" | "white-primary" | "white-secondary" | "white" | "background-primary" | "background-secondary";
}

export default function SeparateSection({
  children,
  className,
  background,
}: SeparateSectionProps) {
  return (
    <div
      className={cn(
        `mt-20 h-auto border-0 outline-none ring-0 w-full bg-${background} py-20 ${className}`,
      )}
    >
      <SideSpaceWrapper>{children}</SideSpaceWrapper>
    </div>
  );
}
