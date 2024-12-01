import { type TypographyProp } from "./TypographyH2";

export function TypographySmall({children} : TypographyProp) {
  return (
    <small className="text-sm font-medium leading-none">
        {children}
    </small>
  );
}
