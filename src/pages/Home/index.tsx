import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { ReactElement } from "react";
import { ThemeType } from "../../@types/styled";
import { Text } from "../../components/Text";
import { Title } from "../../components/Title";
import { defaultTheme } from "../../styles/themes/default";
import {
  IconAndInformationItemsContainer,
  IconContainer,
  ImgContainer,
  InformationContainer,
  IntroContainer,
  TextContainer,
} from "./styles";

const CoffeeHomeImg = "src/assets/coffee-home.png";

export function Home() {
  return (
    <>
      <IntroContainer>
        <div>
          <TextContainer>
            <Title variant={"xl"}>
              Encontre o café perfeito para qualquer hora do dia
            </Title>
            <Text variant={"l"}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Text>
          </TextContainer>
          <IconAndInformationItemsContainer>
            <IconAndInformationComponent
              icon={
                <ShoppingCart
                  size={"1rem"}
                  weight="fill"
                  color={defaultTheme.white}
                />
              }
              text={"Compra simples e segura"}
              iconBackgroundColor="yellow-dark"
            />
            <IconAndInformationComponent
              icon={
                <Package
                  size={"1rem"}
                  weight="fill"
                  color={defaultTheme.white}
                />
              }
              text={"Embalagem mantém o café intacto"}
              iconBackgroundColor="base-text"
            />
            <IconAndInformationComponent
              icon={
                <Timer size={"1rem"} weight="fill" color={defaultTheme.white} />
              }
              text={"Entrega rápida e rastreada"}
              iconBackgroundColor="yellow"
            />
            <IconAndInformationComponent
              icon={
                <Coffee
                  size={"1rem"}
                  weight="fill"
                  color={defaultTheme.white}
                />
              }
              text={"O café chega fresquinho até você"}
              iconBackgroundColor="purple"
            />
          </IconAndInformationItemsContainer>
        </div>
        <ImgContainer
          src={CoffeeHomeImg}
          alt="Image of a cup of coffee and coffee grains aside"
        />
      </IntroContainer>
    </>
  );
}

interface IconAndInformationComponent {
  icon: ReactElement;
  iconBackgroundColor: ThemeType;
  text: string;
}

function IconAndInformationComponent({
  icon,
  iconBackgroundColor,
  text,
}: IconAndInformationComponent) {
  return (
    <InformationContainer>
      <IconContainer background={iconBackgroundColor}>{icon}</IconContainer>
      <Text variant={"m"}>{text}</Text>
    </InformationContainer>
  );
}
