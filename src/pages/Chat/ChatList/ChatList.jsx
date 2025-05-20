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
import { chatRooms } from "../chatDummyData";

const getInitial = (nickname) => nickname.charAt(0).toUpperCase();

const ChatList = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <ChatListWrapper>
        {chatRooms.map((chat) => (
          <ChatItem key={chat.id} onClick={() => navigate(`/chat/${chat.id}`)}>
            <ProfileCircle>{getInitial(chat.nickname)}</ProfileCircle>
            <ChatInfo>
              <ChatTitleRow>
                <ChatTitle>{chat.nickname}</ChatTitle>
                <ChatTime>{chat.lastTime}</ChatTime>
                {chat.unread && <UnreadDot />}
              </ChatTitleRow>
              <ChatMeta>{chat.postTitle}</ChatMeta>
              <ChatPreview>{chat.lastMessage}</ChatPreview>
            </ChatInfo>
          </ChatItem>
        ))}
      </ChatListWrapper>
      <Navbar />
    </Container>
  );
};

export default ChatList;
