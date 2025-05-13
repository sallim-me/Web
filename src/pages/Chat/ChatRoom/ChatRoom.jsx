import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import backIcon from "../../../assets/back.svg";
import sendIcon from "../../../assets/send.svg";
import arrowIcon from "../../../assets/arrow.svg";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const chatAreaRef = useRef(null);

  // 더미 데이터 - 실제로는 API에서 받아와야 함
  const postInfo = {
    id: "post123",
    title: "맥북 프로 M1 2020 13인치 판매합니다",
  };

  const messages = [
    {
      id: 1,
      date: "2024년 3월 15일",
      items: [
        {
          id: 1,
          content: "안녕하세요! 상품 아직 있나요?",
          time: "14:30",
          isMine: false,
        },
        {
          id: 2,
          content: "네, 아직 있습니다!",
          time: "14:31",
          isMine: true,
        },
      ],
    },
    {
      id: 2,
      date: "2024년 3월 16일",
      items: [
        {
          id: 3,
          content: "가격은 얼마인가요?",
          time: "10:15",
          isMine: false,
        },
        {
          id: 4,
          content: "50만원입니다. 협의 가능합니다.",
          time: "10:20",
          isMine: true,
        },
        {
          id: 5,
          content: "직거래 가능한가요?",
          time: "10:25",
          isMine: false,
        },
      ],
    },
  ];

  const handleBack = () => {
    navigate(-1);
  };

  const handlePostClick = () => {
    navigate(`/posts/${postInfo.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: 메시지 전송 로직 구현
      setMessage("");
    }
  };

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <img src={backIcon} alt="뒤로 가기" />
        </S.BackButton>
        <S.Title onClick={handlePostClick}>
          <S.TitleText>{postInfo.title}</S.TitleText>
          <S.ArrowIcon src={arrowIcon} alt="게시글로 이동" />
        </S.Title>
      </S.Header>

      <S.ChatArea ref={chatAreaRef}>
        {messages.map((group) => (
          <div key={group.id}>
            <S.DateDivider>
              <span>{group.date}</span>
            </S.DateDivider>
            {group.items.map((msg) => (
              <S.Message key={msg.id} isMine={msg.isMine}>
                <S.ProfileImage isMine={msg.isMine} />
                <div>
                  <S.MessageContent isMine={msg.isMine}>
                    {msg.content}
                  </S.MessageContent>
                  <S.MessageTime isMine={msg.isMine}>{msg.time}</S.MessageTime>
                </div>
              </S.Message>
            ))}
          </div>
        ))}
      </S.ChatArea>

      <S.InputArea onSubmit={handleSubmit}>
        <S.Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <S.SendButton type="submit">
          <img src={sendIcon} alt="전송" />
        </S.SendButton>
      </S.InputArea>
    </S.Container>
  );
};

export default ChatRoom;
