import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const AlarmDot = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  background-color: #9fb3df;
  border-radius: 50%;
`;
