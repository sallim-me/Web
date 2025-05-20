import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 24px 0 80px 0;
  min-height: 100vh;
  background: #fff;
`;
export const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background: none;
`;
export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 28px;
    height: 28px;
    filter: none;
  }
  &:hover {
    background: #f0f0f0;
  }
`;
export const AlarmList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 24px;
`;
export const AlarmItem = styled.li`
  position: relative;
  margin-bottom: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 18px 16px 14px 16px;
  background: ${({ isRead }) => (isRead ? "#f8f9fa" : "#eaf3ff")};
  color: ${({ isRead }) => (isRead ? "#888" : "#222")};
  border: 2px solid transparent;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
  ${({ isRead }) =>
    !isRead &&
    css`
      border: 2px solid #9ec6f3;
      font-weight: 700;
    `}
  &:active {
    background: #f0f0f0;
  }
`;
export const AlarmTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
`;
export const AlarmDesc = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 4px;
`;
export const AlarmDate = styled.div`
  font-size: 12px;
  color: #9fb3df;
`;
export const BlueDot = styled.div`
  position: absolute;
  top: 18px;
  right: 16px;
  width: 10px;
  height: 10px;
  background: #9ec6f3;
  border-radius: 50%;
  display: ${({ show }) => (show ? "block" : "none")};
`;
