import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import backIcon from "../../../assets/back.svg";
import PostCard from "../../../components/Post/PostCard/PostCard";
import Navbar from "../../../components/common/Navbar/Navbar";
import Pagination from "../../../components/common/Pagination/Pagination";

const MyPosts = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const savedPosts = localStorage.getItem("posts");
  const posts = savedPosts ? JSON.parse(savedPosts) : [];
  const myPosts = posts.filter((post) => post.isAuthor);

  const handleScrap = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, isScraped: !post.isScraped } : post
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    // Force re-render
    window.location.reload();
  };

  // 페이지네이션 계산
  const totalPages = Math.ceil(myPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = myPosts.slice(startIndex, endIndex);

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
          <img src={backIcon} alt="Back" />
        </S.BackButton>
        <S.Title>내가 쓴 글</S.Title>
      </S.Header>

      <S.PostGrid>
        {currentPosts.map((post) => (
          <PostCard
            key={post.id}
            {...post}
            onScrapClick={() => handleScrap(post.id)}
            onClick={() => {
              if (post.id) {
                navigate(`/post/detail/${post.id}`);
              }
            }}
          />
        ))}
      </S.PostGrid>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      <Navbar />
    </S.Container>
  );
};

export default MyPosts;
