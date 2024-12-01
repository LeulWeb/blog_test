import { type ReactNode } from "react";



export interface TypographyProp {
  children : ReactNode
}

export function TypographyH2({children}: TypographyProp) {
  return (
    <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {
        children
      }
    </h2>
  );
}
