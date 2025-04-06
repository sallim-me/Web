import React from "react";
import * as S from "./styled";

const Input = ({ label, type = "text", error, ...props }) => {
  return (
    <S.InputContainer>
      {label && <S.Label>{label}</S.Label>}
      <S.StyledInput type={type} {...props} />
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
