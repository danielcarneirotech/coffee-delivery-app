import styled from "styled-components";
import { ThemeType } from "../../@types/styled";

export const IntroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5.875rem 10rem 6.75rem 10rem;
  background-image: url("src/assets/intro-background.png");
  justify-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4.125rem;
`;

export const ImgContainer = styled.img``;

export const IconAndInformationItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

interface IconContainerProps {
  background: ThemeType;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: fit-content;
  background-color: ${(props) => props.theme[props.background]};
  border-radius: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 0.5rem;
`;
