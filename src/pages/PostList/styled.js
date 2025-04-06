import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  padding-bottom: 76px; // Navbar 높이 + 여백
`;

export const FilterSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  background: ${(props) => (props.isActive ? "#9FB3DF" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#666")};
  font-size: 0.9rem;
  white-space: nowrap;
  cursor: pointer;
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const AddButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 76px;
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background-color: #9fb3df;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;
