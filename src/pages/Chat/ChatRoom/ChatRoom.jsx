import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styled";
import backIcon from "../../../assets/back.svg";
import sendIcon from "../../../assets/send.svg";
import arrowIcon from "../../../assets/arrow.svg";
import { chatRooms } from "../chatDummyData";

const ChatRoom = () => {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const chat = chatRooms.find((room) => room.id === chatId);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chat ? chat.messages : []);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    setMessages(chat ? chat.messages : []);
  }, [chatId]);

  const handleBack = () => {
    navigate(-1);
  };

  const handlePostClick = () => {
    if (chat) {
      navigate(`/post/detail/${chat.postId}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const now = new Date();
      const today = now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const newMessage = {
        id: Date.now(),
        content: message,
        time: now.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMine: true,
        date: today,
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // 날짜별로 메시지 그룹화
  const grouped = messages.reduce((acc, msg) => {
    if (!acc[msg.date]) acc[msg.date] = [];
    acc[msg.date].push(msg);
    return acc;
  }, {});
  const dateKeys = Object.keys(grouped);

  if (!chat) return <div>채팅방을 찾을 수 없습니다.</div>;

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onClick={handleBack}>
          <img src={backIcon} alt="뒤로 가기" />
        </S.BackButton>
        <S.Title onClick={handlePostClick}>
          <S.TitleText>{chat.postTitle}</S.TitleText>
          <S.ArrowIcon src={arrowIcon} alt="게시글로 이동" />
        </S.Title>
      </S.Header>

      <S.ChatArea ref={chatAreaRef}>
        {dateKeys.map((date) => (
          <div key={date}>
            <S.DateDivider>
              <span>{date}</span>
            </S.DateDivider>
            {grouped[date].map((msg) => (
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
