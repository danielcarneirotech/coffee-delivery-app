import { defaultTheme } from "../styles/themes/default";

type ThemeType = keyof typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
