import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import scrapOnIcon from "../../../assets/scrap-on.svg";
import scrapOffIcon from "../../../assets/scrap-off.svg";
import backIcon from "../../../assets/back.svg";
import Button from "../../../components/common/Button/Button";
// import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
// import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

const PostDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [postStatus, setPostStatus] = useState("available"); // 'available' 또는 'sold'

  // Mock data - 실제로는 API에서 받아와야 함
  const savedPosts = localStorage.getItem("posts");
  const posts = savedPosts ? JSON.parse(savedPosts) : [];
  const post = posts.find((p) => p.id === Number(id)) || {
    id: Number(id),
    title: "게시물을 찾을 수 없습니다",
    author: "알 수 없음",
    authorId: "unknown",
    isAuthor: false,
    type: "sell",
    status: "available",
    category: "알 수 없음",
    images: [],
    modelName: "알 수 없음",
    specifications: {
      brand: "알 수 없음",
      capacity: "알 수 없음",
      powerConsumption: "알 수 없음",
      size: "알 수 없음",
    },
    defectQuestions: {
      cooling: "알 수 없음",
      noise: "알 수 없음",
      exterior: "알 수 없음",
    },
    description: "해당 게시물을 찾을 수 없습니다.",
    price: 0,
    sellingInfo: {
      quantity: 0,
      location: "알 수 없음",
      pickupAvailable: false,
      currentParticipants: 0,
    },
    createdAt: new Date().toISOString(),
  };

  const [isScraped, setIsScraped] = useState(post.isScraped || false);

  const getRandomColor = () => {
    const colors = [
      "#FF9AA2",
      "#FFB7B2",
      "#FFDAC1",
      "#E2F0CB",
      "#B5EAD7",
      "#C7CEEA",
      "#9FB3DF",
      "#B8B3E9",
      "#D4A5A5",
      "#9CADCE",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const profileColor = useMemo(() => getRandomColor(), []);
  const initial = post?.author ? post.author.charAt(0) : "?";

  const handleScrap = () => {
    const updatedPosts = posts.map((p) =>
      p.id === Number(id) ? { ...p, isScraped: !p.isScraped } : p
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setIsScraped(!isScraped);
  };

  const handleStatusChange = () => {
    const newStatus = postStatus === "available" ? "sold" : "available";
    setPostStatus(newStatus);

    // 실제로는 API 호출로 상태를 변경해야 함
    const updatedPosts = posts.map((p) =>
      p.id === Number(id) ? { ...p, status: newStatus } : p
    );
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  //   const handleEdit = () => {
  //     navigate(`/post/edit/${id}`);
  //   };

  //   const handleDelete = () => {
  //     if (window.confirm("정말로 삭제하시겠습니까?")) {
  //       // API call to delete post
  //       navigate("/post");
  //     }
  //   };

  const handleBack = () => {
    navigate(-1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && comment.length <= 1000) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: "현재 사용자",
          content: comment,
          createdAt: new Date().toISOString(),
        },
      ]);
      setComment("");
    }
  };

  const handleCommentDelete = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <img src={backIcon} alt="뒤로 가기" />
        </S.BackButton>
        <S.Title>{post.title}</S.Title>
        <S.ScrapButton onClick={handleScrap}>
          <img src={isScraped ? scrapOnIcon : scrapOffIcon} alt="스크랩" />
        </S.ScrapButton>
      </S.Header>

      <S.Content>
        <S.ImageSection>
          {/* Image carousel will be added here */}
        </S.ImageSection>

        <S.InfoSection>
          <S.Price>
            <span>가격</span>
            <span>{post.price.toLocaleString()}원</span>
          </S.Price>

          <S.AuthorSection>
            <S.AuthorInfo>
              <S.ProfileInitial backgroundColor={profileColor}>
                {initial}
              </S.ProfileInitial>
              <S.Author>{post.author}</S.Author>
            </S.AuthorInfo>
            {post.isAuthor ? (
              <Button
                variant={postStatus === "available" ? "primary" : "secondary"}
                $width={postStatus === "available" ? "20%" : "30%"}
                $padding="5px"
                $fontSize="0.8rem"
                onClick={handleStatusChange}
              >
                {postStatus === "available" ? "판매 완료" : "판매중으로 변경"}
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => navigate(`/chat/${post.authorId}`)}
              >
                채팅하기
              </Button>
            )}
          </S.AuthorSection>

          <S.SpecificationSection>
            <S.Label>제품 정보</S.Label>
            <S.SpecificationText>
              {post?.specifications &&
              Object.values(post.specifications).some(
                (value) => value && value !== "알 수 없음"
              ) ? (
                <p>{post.specifications}</p>
              ) : null}
            </S.SpecificationText>
          </S.SpecificationSection>

          <S.DefectSection>
            <S.Label>상태 정보</S.Label>
            <S.DefectGrid>
              <S.DefectItem>
                <span>냉각 기능</span>
                <span>{post?.defectQuestions?.cooling || "알 수 없음"}</span>
              </S.DefectItem>
              <S.DefectItem>
                <span>소음</span>
                <span>{post?.defectQuestions?.noise || "알 수 없음"}</span>
              </S.DefectItem>
              <S.DefectItem>
                <span>외관</span>
                <span>{post?.defectQuestions?.exterior || "알 수 없음"}</span>
              </S.DefectItem>
            </S.DefectGrid>
          </S.DefectSection>

          <S.Description>
            <S.Label>상세 설명</S.Label>
            <S.DescriptionText>{post.description}</S.DescriptionText>
          </S.Description>
        </S.InfoSection>

        <S.CommentSection>
          <S.Label>댓글</S.Label>
          <S.CommentForm onSubmit={handleCommentSubmit}>
            <S.CommentInput
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={1000}
              placeholder="댓글을 입력하세요 (최대 1000자)"
            />
            <Button type="submit" variant="primary" $width="25%">
              등록
            </Button>
          </S.CommentForm>
          <S.CommentList>
            {comments.map((comment) => (
              <S.CommentItem key={comment.id}>
                <S.CommentHeader>
                  <S.CommentAuthor>{comment.author}</S.CommentAuthor>
                  <S.CommentDate>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </S.CommentDate>
                </S.CommentHeader>
                <S.CommentContent>{comment.content}</S.CommentContent>
                {comment.author === "현재 사용자" && (
                  <Button
                    variant="secondary"
                    $width="20%"
                    $padding="1px"
                    onClick={() => handleCommentDelete(comment.id)}
                  >
                    삭제
                  </Button>
                )}
              </S.CommentItem>
            ))}
          </S.CommentList>
        </S.CommentSection>
      </S.Content>
    </S.Container>
  );
};

export default PostDetail;
