import { TitleContainer } from "./styles";

interface TitleProps {
  variant: "xl" | "l" | "m" | "s" | "xs";
  children: string;
}

export function Title({ variant, children }: TitleProps) {
  return <TitleContainer variant={variant}>{children}</TitleContainer>;
}
