import { type TypographyProp } from "./TypographyH2";

export function TypographyLead({children} : TypographyProp) {
  return (
    <p className="text-xl text-muted-foreground">
     {
        children
     }
    </p>
  );
}
