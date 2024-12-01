import { TypographyProp } from "./TypographyH2";

export function TypographyP({children}: TypographyProp) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {
        children
      }
    </p>
  );
}
