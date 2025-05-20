import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/common/Header/Header";
import Navbar from "../../../components/common/Navbar/Navbar";
import * as S from "./styled";
import { chatRooms } from "../chatDummyData";

const getInitial = (nickname) => nickname.charAt(0).toUpperCase();

const ChatList = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <Header />
      <S.ChatListWrapper>
        {chatRooms.map((chat) => (
          <S.ChatItem
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
          >
            <S.ProfileCircle>{getInitial(chat.nickname)}</S.ProfileCircle>
            <S.ChatInfo>
              <S.ChatTitleRow>
                <S.ChatTitle>{chat.nickname}</S.ChatTitle>
                <S.ChatTime>{chat.lastTime}</S.ChatTime>
                {chat.unread && <S.UnreadDot />}
              </S.ChatTitleRow>
              <S.ChatMeta>{chat.postTitle}</S.ChatMeta>
              <S.ChatPreview>{chat.lastMessage}</S.ChatPreview>
            </S.ChatInfo>
          </S.ChatItem>
        ))}
      </S.ChatListWrapper>
      <Navbar />
    </S.Container>
  );
};

export default ChatList;
