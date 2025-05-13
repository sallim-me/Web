import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 80px;
  background: #fff;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: relative;
  height: 56px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  left: 8px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  margin: 0;
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background: #f5f5f5;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardTitle = styled.div`
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardPrice = styled.div`
  padding: 0 12px 12px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding: 16px;
`;

export const PageButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 16px;
  background-color: ${(props) => (props.isActive ? "#9EC6F3" : "#BDDDE4")};
  color: ${(props) => (props.isActive ? "#fff" : "#666")};
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#9FB3DF" : "#9EC6F3")};
  }
`;
