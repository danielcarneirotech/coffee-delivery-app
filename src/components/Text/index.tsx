import { TextContainer } from "./styles";

interface TextProps {
  variant: "l" | "m" | "s" | "xs";
  bold?: boolean;
  children: string;
}

export function Text({ bold, variant, children }: TextProps) {
  return (
    <TextContainer variant={variant} bold={bold}>
      {children}
    </TextContainer>
  );
}
