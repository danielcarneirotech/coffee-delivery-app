import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ImgContainer = styled.img`
  height: 2.5rem;
  object-fit: contain;
`;

export const AddressAndShoppingCartContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const AddressContainer = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme["purple-light"]};
  width: fit-content;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ShoppingCartContainer = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme["yellow-light"]};
  border-radius: 6px;
  width: fit-content;
  position: relative;
`;

export const NotificationContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme["yellow-dark"]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
`;
