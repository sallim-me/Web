import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import PostCard from "../../../components/Post/PostCard/PostCard";
import Header from "../../../components/common/Header/Header";
import Navbar from "../../../components/common/Navbar/Navbar";
import Pagination from "../../../components/common/Pagination/Pagination";
import refrigeratorIcon from "../../../assets/refrigerator.svg";
import washerIcon from "../../../assets/washer.svg";
import airconditionerIcon from "../../../assets/airconditioner.svg";

const PostList = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const categories = ["냉장고", "에어컨", "세탁기"];
  const statusOptions = [
    { value: "all", label: "전체 상태" },
    { value: "available", label: "판매중" },
    { value: "sold", label: "판매완료" },
  ];

  const getImageForCategory = (category) => {
    switch (category) {
      case "냉장고":
        return refrigeratorIcon;
      case "세탁기":
        return washerIcon;
      case "에어컨":
        return airconditionerIcon;
      default:
        return refrigeratorIcon;
    }
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // 초기 게시물 데이터
  const initialPosts = [
    {
      id: 1,
      title: "[판매] 삼성 냉장고 팝니다",
      modelName: "RM70F90",
      price: 500000,
      imageUrl: refrigeratorIcon,
      isScraped: false,
      category: "냉장고",
      status: "available",
    },
    {
      id: 2,
      title: "[판매] LG 통돌이 세탁기 급처",
      modelName: "CAE7895SI",
      price: 150000,
      imageUrl: washerIcon,
      isScraped: true,
      category: "세탁기",
      status: "available",
    },
    {
      id: 3,
      title: "[판매] 스탠드 에어컨 판매합니다",
      modelName: "E5ZSC",
      price: 350000,
      imageUrl: airconditionerIcon,
      isScraped: false,
      category: "에어컨",
      status: "available",
    },
    {
      id: 4,
      title: "[판매] 건조기 팔아요 (2년 사용)",
      modelName: "333CDO23",
      price: 400000,
      imageUrl: washerIcon,
      isScraped: true,
      category: "세탁기",
      status: "sold",
    },
    {
      id: 5,
      title: "[판매] 삼성 비스포크 냉장고",
      modelName: "SD86X645",
      price: 1200000,
      imageUrl: refrigeratorIcon,
      isScraped: false,
      category: "냉장고",
      status: "available",
    },
    {
      id: 6,
      title: "[판매] 벽걸이 에어컨 판매",
      modelName: "QPLM4577",
      price: 280000,
      imageUrl: airconditionerIcon,
      isScraped: false,
      category: "에어컨",
      status: "available",
    },
    {
      id: 7,
      title: "[판매] LG 트롬 세탁기",
      modelName: "SPEQXF4",
      price: 450000,
      imageUrl: washerIcon,
      isScraped: true,
      category: "세탁기",
      status: "available",
    },
    {
      id: 8,
      title: "[판매] 삼성 냉장고 (새제품)",
      modelName: "OWJ70002",
      price: 650000,
      imageUrl: refrigeratorIcon,
      isScraped: false,
      category: "냉장고",
      status: "available",
    },
  ];

  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    const parsedPosts = savedPosts ? JSON.parse(savedPosts) : initialPosts;

    // 기존 포스트 데이터에 누락된 필드 추가
    const updatedPosts = parsedPosts.map((post) => ({
      ...post,
      author: post.author || "현재 사용자",
      authorId: post.authorId || "current-user",
      isAuthor: post.isAuthor ?? true,
      type: post.type || "sell",
      status: post.status || "available",
      specifications: post.specifications || "",
      defectQuestions: post.defectQuestions || {
        cooling: "정상",
        noise: "정상",
        exterior: "정상",
      },
    }));

    return updatedPosts;
  });

  // posts가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleScrap = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, isScraped: !post.isScraped } : post
    );
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(post.category);
    const statusMatch =
      selectedStatus === "all" || post.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <S.Container>
        <S.FilterSection>
          <S.CategoryGroup>
            {categories.map((category) => (
              <S.FilterButton
                key={category}
                isActive={selectedCategories.includes(category)}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </S.FilterButton>
            ))}
          </S.CategoryGroup>
          <S.Divider />
          <S.StatusGroup>
            {statusOptions.map((option) => (
              <S.FilterButton
                key={option.value}
                isActive={selectedStatus === option.value}
                onClick={() => setSelectedStatus(option.value)}
              >
                {option.label}
              </S.FilterButton>
            ))}
          </S.StatusGroup>
        </S.FilterSection>

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

        <S.AddButton onClick={() => navigate("/post/create")}>+</S.AddButton>
      </S.Container>
      <Navbar />
    </>
  );
};

export default PostList;
