import React, { ReactNode } from "react";

export default function SideSpaceWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="side-space-style">{children}</div>;
}
