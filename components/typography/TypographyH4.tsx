import { TypographyProp } from "./TypographyH2";

export function TypographyH4({ children }: TypographyProp) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}
