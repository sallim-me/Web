import React from "react";
import * as S from "./styled";
import scrapOff from "../../../assets/scrap-off.svg";
import scrapOn from "../../../assets/scrap-on.svg";

const PostCard = ({ title, price, imageUrl, isScraped, onScrapClick }) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={imageUrl} alt={title} />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.Price>{price.toLocaleString()}원</S.Price>
      <S.ScrapButton onClick={onScrapClick}>
        <img src={isScraped ? scrapOn : scrapOff} alt="스크랩" />
      </S.ScrapButton>
    </S.Card>
  );
};

export default PostCard;
