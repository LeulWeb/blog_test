import { TypographyProp } from "./TypographyH2";

export function TypographyMuted({children}: TypographyProp) {
  return (
    <p className="text-sm text-muted-foreground">
        {children}
    </p>
  );
}
