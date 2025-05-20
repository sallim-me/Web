import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Button from "../../../components/common/Button/Button";
import Navbar from "../../../components/common/Navbar/Navbar";
import EditProfileModal from "../../../components/My/EditProfileModal/EditProfileModal";

const MyPage = () => {
  const navigate = useNavigate();

  // 예시 유저 정보 (실제로는 API나 Context에서 가져와야 함)
  const [userName, setUserName] = React.useState("홍길동");
  const [nickname, setNickname] = React.useState("HGD");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // 실제 글 데이터 불러오기
  const savedPosts = localStorage.getItem("posts");
  const posts = savedPosts ? JSON.parse(savedPosts) : [];
  const myPosts = posts.filter((post) => post.isAuthor);
  const scrappedPosts = posts.filter((post) => post.isScraped);

  // 로컬 스토리지에서 유저 정보 불러오기
  React.useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserName(user.name || "홍길동");
      setNickname(user.nickname || "HGD");
    }
  }, []);

  // 유저 정보 로컬 스토리지에 저장
  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUserName(userData.name);
    setNickname(userData.nickname);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = (formData) => {
    saveUser({ name: formData.name, nickname: formData.nickname });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>마이페이지</S.Title>
      </S.Header>

      <S.ProfileSection
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <S.ProfileImage>{nickname.charAt(0) || "H"}</S.ProfileImage>
          <S.ProfileInfo>
            <S.UserName>{userName}</S.UserName>
            <S.UserNickname>닉네임: {nickname}</S.UserNickname>
          </S.ProfileInfo>
        </div>
        <Button size="small" variant="2" onClick={handleEditClick}>
          회원 정보 수정
        </Button>
      </S.ProfileSection>

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
            {post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "70px", // ImageBox와 동일하게 높이 설정
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
            ) : (
              <S.ImageBox>이미지 없음</S.ImageBox>
            )}
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
            {post.imageUrl ? (
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "70px", // ImageBox와 동일하게 높이 설정
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
            ) : (
              <S.ImageBox>이미지 없음</S.ImageBox>
            )}
            <S.CardTitle>{post.title}</S.CardTitle>
            <S.CardPrice>₩{post.price.toLocaleString()}</S.CardPrice>
          </S.PostCard>
        ))}
      </S.HorizontalScroll>

      <Navbar />

      <EditProfileModal
        show={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveProfile}
        initialData={{ name: userName, nickname: nickname }}
      />
    </S.Container>
  );
};

export default MyPage;
