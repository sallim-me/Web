import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #fff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #9ec6f3;
  color: white;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: white;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex: 1;
  max-width: 85%;
  padding: 0 16px;
  cursor: pointer;
`;

export const TitleText = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const ChatArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DateDivider = styled.div`
  text-align: center;
  margin: 16px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #e9ecef;
  }

  span {
    background-color: #fff;
    padding: 0 12px;
    color: #666;
    font-size: 12px;
    position: relative;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isMine ? "row-reverse" : "row")};
  align-items: flex-end;
  gap: 8px;
  margin: 4px 0;
`;

export const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #e9ecef;
  display: ${(props) => (props.isMine ? "none" : "block")};
  flex-shrink: 0;
`;

export const MessageContent = styled.div`
  background-color: ${(props) => (props.isMine ? "#fff" : "#fff")};
  color: #333;
  padding: 12px 16px;
  border-radius: 16px;
  border-bottom-${(props) => (props.isMine ? "right" : "left")}-radius: 4px;
  max-width: 75%;
  word-break: break-word;
  border: 1px solid ${(props) => (props.isMine ? "#9EC6F3" : "#BDDDE4")};
`;

export const MessageTime = styled.span`
  font-size: 11px;
  color: #999;
  margin-top: 4px;
  display: block;
  text-align: ${(props) => (props.isMine ? "right" : "left")};
`;

export const InputArea = styled.form`
  display: flex;
  gap: 8px;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #eee;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: 1px solid #bddde4;
  border-radius: 20px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #9ec6f3;
  }
`;

export const SendButton = styled.button`
  background-color: #9ec6f3;
  color: white;
  border: none;
  border-radius: 20px;
  min-width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 16px;

  &:hover {
    background-color: #9fb3df;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
