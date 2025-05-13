import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import backIcon from "../../../assets/back.svg";

const ScrappedPosts = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const savedPosts = localStorage.getItem("posts");
  const posts = savedPosts ? JSON.parse(savedPosts) : [];
  const scrappedPosts = posts.filter((post) => post.isScraped);

  // 페이지네이션 계산
  const totalPages = Math.ceil(scrappedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = scrappedPosts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBack = () => {
    navigate("/my-page");
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <img src={backIcon} alt="뒤로 가기" />
        </S.BackButton>
        <S.Title>스크랩한 글</S.Title>
      </S.Header>
      <S.PostGrid>
        {currentPosts.map((post) => (
          <S.Card
            key={post.id}
            onClick={() => navigate(`/post/detail/${post.id}`)}
          >
            <S.ImageBox>
              <img src={post.imageUrl} alt={post.title} />
            </S.ImageBox>
            <S.CardTitle>{post.title}</S.CardTitle>
            <S.CardPrice>{post.price.toLocaleString()}원</S.CardPrice>
          </S.Card>
        ))}
      </S.PostGrid>
      {totalPages > 1 && (
        <S.Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <S.PageButton
              key={page}
              isActive={currentPage === page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </S.PageButton>
          ))}
        </S.Pagination>
      )}
    </S.Container>
  );
};

export default ScrappedPosts;
