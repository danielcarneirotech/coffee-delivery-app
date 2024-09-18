import { HTMLAttributes } from "react";
import { ThemeType } from "../../@types/styled";
import { TextContainer } from "./styles";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: "l" | "m" | "s" | "xs";
  bold?: boolean;
  color?: ThemeType;
}

export function Text({ bold, variant, children, color }: TextProps) {
  return (
    <TextContainer color={color} variant={variant} bold={bold}>
      {children}
    </TextContainer>
  );
}
