import { type TypographyProp } from "./TypographyH2";

export function TypographyLarge({children} : TypographyProp) {
  return <div className="text-lg font-semibold">
    {children}
  </div>;
}
