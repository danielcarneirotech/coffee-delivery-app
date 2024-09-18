import styled, { css } from "styled-components";

interface TitleContainerProps {
  variant: "xl" | "l" | "m" | "s" | "xs";
}

export const TitleContainer = styled.h1<TitleContainerProps>`
  ${({ variant }) =>
    variant
      ? variant === "xl"
        ? css`
            font-size: 3rem;
          `
        : variant === "l"
        ? css`
            font-size: 2rem;
          `
        : variant === "m"
        ? css`
            font-size: 1.5rem;
          `
        : variant === "s"
        ? css`
            font-size: 1.25rem;
            font-weight: 600;
          `
        : variant === "xs"
        ? css`
            font-size: 1.25rem;
            font-weight: 600;
          `
        : null
      : null}
`;
