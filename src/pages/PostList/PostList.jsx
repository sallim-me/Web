import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import PostCard from "../../components/Post/PostCard/PostCard";
import Header from "../../components/common/Header/Header";
import Navbar from "../../components/common/Navbar/Navbar";

const PostList = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = ["냉장고", "에어컨", "세탁기", "건조기", "기타"];
  const statusOptions = [
    { value: "all", label: "전체 상태" },
    { value: "available", label: "판매중" },
    { value: "reserved", label: "예약중" },
    { value: "sold", label: "판매완료" },
  ];

  // 임시 데이터
  const posts = [
    {
      id: 1,
      title: "삼성 냉장고 팝니다",
      price: 500000,
      imageUrl: "https://placeholder.com/300x200",
      isScraped: false,
    },
    // ... 더 많은 게시글 데이터
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleScrap = (postId) => {
    // TODO: 스크랩 처리 로직
    console.log("Scrap toggled for post:", postId);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.FilterSection>
          {categories.map((category) => (
            <S.FilterButton
              key={category}
              isActive={selectedCategories.includes(category)}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </S.FilterButton>
          ))}
        </S.FilterSection>

        <S.FilterSection>
          {statusOptions.map((option) => (
            <S.FilterButton
              key={option.value}
              isActive={selectedStatus === option.value}
              onClick={() => setSelectedStatus(option.value)}
            >
              {option.label}
            </S.FilterButton>
          ))}
        </S.FilterSection>

        <S.PostGrid>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              {...post}
              onScrapClick={() => handleScrap(post.id)}
            />
          ))}
        </S.PostGrid>

        <S.AddButton onClick={() => navigate("/post/create")}>+</S.AddButton>
      </S.Container>
      <Navbar />
    </>
  );
};

export default PostList;
