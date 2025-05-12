import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const MyPage = () => {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>마이페이지</S.Title>
      </S.Header>

      <S.ProfileSection>
        <S.ProfileImage>H</S.ProfileImage>
        <S.ProfileInfo>
          <S.UserName>홍길동</S.UserName>
          <S.UserEmail>user@example.com</S.UserEmail>
        </S.ProfileInfo>
      </S.ProfileSection>

      <S.MenuList>
        <S.MenuItem onClick={() => handleMenuClick("/my/posts")}>
          <span>내가 쓴 글</span>
          <S.ArrowIcon>›</S.ArrowIcon>
        </S.MenuItem>
        <S.MenuItem onClick={() => handleMenuClick("/my/scrapped")}>
          <span>스크랩한 글</span>
          <S.ArrowIcon>›</S.ArrowIcon>
        </S.MenuItem>
      </S.MenuList>
    </S.Container>
  );
};

export default MyPage;
