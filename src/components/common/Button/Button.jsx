import React from "react";
import * as S from "./styled";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
