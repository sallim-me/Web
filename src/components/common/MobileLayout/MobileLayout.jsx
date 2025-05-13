import React from "react";
import * as S from "./styled";

const MobileLayout = ({ children }) => {
  return (
    <S.MobileContainer>
      <S.MobileContent>{children}</S.MobileContent>
    </S.MobileContainer>
  );
};

export default MobileLayout;
