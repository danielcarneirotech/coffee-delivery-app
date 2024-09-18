import { MapPinLine, ShoppingCart } from "@phosphor-icons/react";
import { defaultTheme } from "../../styles/themes/default";
import { Text } from "../Text";
import {
  AddressAndShoppingCartContainer,
  AddressContainer,
  Container,
  ImgContainer,
  NotificationContainer,
  ShoppingCartContainer,
} from "./styles";

import logo from "../../assets/Logo.png";

const notificationsCount = 3;

export function Header() {
  return (
    <Container>
      <ImgContainer
        src={logo}
        alt="Image of a purple cup of coffee writtn 'Coffee Delivery' do lado"
      />

      <AddressAndShoppingCartContainer>
        <AddressContainer>
          <MapPinLine size={22} color={defaultTheme.purple} weight="fill" />
          <Text variant={"s"} color={"purple-dark"}>
            Porto Alegre, RS
          </Text>
        </AddressContainer>

        <ShoppingCartContainer>
          {notificationsCount > 0 && (
            <NotificationContainer>
              <Text variant={"s"} bold color={"white"}>
                {notificationsCount}
              </Text>
            </NotificationContainer>
          )}
          <ShoppingCart
            size={22}
            color={defaultTheme["yellow-dark"]}
            weight="fill"
          />
        </ShoppingCartContainer>
      </AddressAndShoppingCartContainer>
    </Container>
  );
}
