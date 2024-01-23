import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";

import * as S from "./styles";

//componente botao com a tipagem dos seus tipos primitivos
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

const Button: FC<ButtonProps> = ({ children, icon, ...props }) => (
  <S.Wrapper {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
