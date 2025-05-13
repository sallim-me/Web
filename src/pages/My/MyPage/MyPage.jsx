import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Button from "../../../components/common/Button/Button";
import Navbar from "../../../components/common/Navbar/Navbar";

const MyPage = () => {
  const navigate = useNavigate();

  // 예시 유저 정보
  const nickname = "HGD";
  const userName = "홍길동";

  // 실제 글 데이터 불러오기
  const savedPosts = localStorage.getItem("posts");
  const posts = savedPosts ? JSON.parse(savedPosts) : [];
  const myPosts = posts.filter((post) => post.isAuthor);
  const scrappedPosts = posts.filter((post) => post.isScraped);

  return (
    <S.Container>
      <S.Header>
        <S.Title>마이페이지</S.Title>
      </S.Header>

      <S.ProfileSection>
        <S.ProfileImage>H</S.ProfileImage>
        <S.ProfileInfo>
          <S.UserName>{userName}</S.UserName>
          <S.UserNickname>닉네임: {nickname}</S.UserNickname>
        </S.ProfileInfo>
      </S.ProfileSection>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 0 16px 0",
        }}
      >
        <Button variant="secondary" $width="60%" $padding="0.75rem">
          회원 정보 수정
        </Button>
      </div>

      {/* 내가 쓴 글 */}
      <S.SectionRow>
        <S.SectionTitle>내가 쓴 글</S.SectionTitle>
        <S.SectionMore onClick={() => navigate("/my-page/my-posts")}>
          {" "}
          &gt;{" "}
        </S.SectionMore>
      </S.SectionRow>
      <S.HorizontalScroll>
        {myPosts.map((post) => (
          <S.PostCard
            key={post.id}
            onClick={() => navigate(`/post/detail/${post.id}`)}
            style={{ cursor: "pointer" }}
          >
            <S.ImageBox />
            <S.CardTitle>{post.title}</S.CardTitle>
            <S.CardPrice>₩{post.price.toLocaleString()}</S.CardPrice>
          </S.PostCard>
        ))}
      </S.HorizontalScroll>

      {/* 스크랩한 글 */}
      <S.SectionRow>
        <S.SectionTitle>스크랩한 글</S.SectionTitle>
        <S.SectionMore onClick={() => navigate("/my-page/scrapped")}>
          {" "}
          &gt;{" "}
        </S.SectionMore>
      </S.SectionRow>
      <S.HorizontalScroll>
        {scrappedPosts.map((post) => (
          <S.PostCard
            key={post.id}
            onClick={() => navigate(`/post/detail/${post.id}`)}
            style={{ cursor: "pointer" }}
          >
            <S.ImageBox />
            <S.CardTitle>{post.title}</S.CardTitle>
            <S.CardPrice>₩{post.price.toLocaleString()}</S.CardPrice>
          </S.PostCard>
        ))}
      </S.HorizontalScroll>

      <Navbar />
    </S.Container>
  );
};

export default MyPage;
