import styled, { css } from "styled-components";

interface TextContainerProps {
  variant: "l" | "m" | "s" | "xs";
  bold?: boolean;
}

export const TextContainer = styled.p<TextContainerProps>`
  ${({ variant, bold }) =>
    variant
      ? variant === "l"
        ? css`
            font-size: 1.25rem;
            font-weight: ${bold ? "600" : "normal"};
          `
        : variant === "m"
        ? css`
            font-size: 1rem;
            font-weight: ${bold ? "600" : "normal"};
          `
        : variant === "s"
        ? css`
            font-size: 0.875rem;
          `
        : variant === "xs"
        ? css`
            font-size: 0.75rem;
            font-weight: 600;
          `
        : null
      : null}
`;
