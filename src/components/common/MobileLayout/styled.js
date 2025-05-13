import styled from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;

  @media (min-width: 521px) {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
  }
`;

export const MobileContent = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  position: relative;
  overflow-x: hidden;

  @media (min-width: 521px) {
    max-width: 520px;
  }
`;
