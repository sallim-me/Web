import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header/Header";
import Navbar from "../../../components/common/Navbar/Navbar";
import {
  Container,
  ChatListWrapper,
  ChatItem,
  ProfileCircle,
  ChatInfo,
  ChatTitleRow,
  ChatTitle,
  ChatTime,
  ChatMeta,
  ChatPreview,
  UnreadDot,
} from "./styled";

// 더미 데이터 (한국어)
const chatList = [
  {
    id: 1,
    nickname: "김철수",
    postTitle: "삼성 냉장고 팝니다",
    lastMessage: "아직 구매 가능할까요?",
    lastTime: "14:34",
    unread: false,
  },
  {
    id: 2,
    nickname: "이영희",
    postTitle: "중고 자전거 판매",
    lastMessage: "내일 오후 2시에 만날 수 있을까요?",
    lastTime: "어제",
    unread: true,
  },
  {
    id: 3,
    nickname: "박민수",
    postTitle: "아이폰 13 프로",
    lastMessage: "빠른 답변 감사합니다!",
    lastTime: "월",
    unread: false,
  },
];

const getInitial = (nickname) => nickname.charAt(0).toUpperCase();

const ChatList = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <ChatListWrapper>
        {chatList.map((chat) => (
          <ChatItem key={chat.id} onClick={() => navigate(`/chat/${chat.id}`)}>
            <ProfileCircle>{getInitial(chat.nickname)}</ProfileCircle>
            <ChatInfo>
              <ChatTitleRow>
                <ChatTitle>{chat.nickname}</ChatTitle>
                <ChatTime>{chat.lastTime}</ChatTime>
              </ChatTitleRow>
              <div style={{ color: "#888", fontSize: 13 }}>
                {chat.postTitle}
              </div>
              <ChatPreview>{chat.lastMessage}</ChatPreview>
            </ChatInfo>
            {chat.unread && <UnreadDot />}
          </ChatItem>
        ))}
      </ChatListWrapper>
      <Navbar />
    </Container>
  );
};

export default ChatList;
