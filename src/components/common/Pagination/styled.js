import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
  padding: 16px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 14px;
  color: #333;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #f5f5f5;
  }
`;

export const PageNumber = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  background: ${(props) => (props.isActive ? "#BDDDE4" : "white")};
  color: ${(props) => (props.isActive ? "#333" : "#333")};
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${(props) => (props.isActive ? "#BDDDE4" : "#f5f5f5")};
  }
`;
