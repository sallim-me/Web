import React from "react";
import * as S from "./styled";
import scrapOff from "../../../assets/scrap-off.svg";
import scrapOn from "../../../assets/scrap-on.svg";

const PostCard = ({
  title,
  modelName,
  price,
  imageUrl,
  isScraped,
  onScrapClick,
  onClick,
}) => {
  const handleScrapClick = (e) => {
    e.stopPropagation();
    onScrapClick();
  };

  return (
    <S.Card onClick={onClick}>
      <S.ImageContainer>
        <img src={imageUrl} alt={title} />
      </S.ImageContainer>
      <S.Title>{title}</S.Title>
      <S.ModelName>{modelName}</S.ModelName>
      <S.PriceRow>
        <S.Price>{price.toLocaleString()}원</S.Price>
        <S.ScrapButton onClick={handleScrapClick}>
          <img src={isScraped ? scrapOn : scrapOff} alt="스크랩" />
        </S.ScrapButton>
      </S.PriceRow>
    </S.Card>
  );
};

export default PostCard;
