import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 80px;
  background: #fff;
  min-height: 100vh;
`;

export const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #9ec6f3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
`;

export const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ChatTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const ChatTitle = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const ChatTime = styled.span`
  color: #9fb3df;
  font-size: 12px;
`;

export const ChatPreview = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UnreadDot = styled.div`
  background-color: #9ec6f3;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: 8px;
`;
