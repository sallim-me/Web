import styled from "styled-components";

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f5f5f5;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 8px 0;
  color: #333;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: #000;
`;

export const ScrapButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 12px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;
