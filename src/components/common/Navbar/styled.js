import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => (props.isActive ? "#9FB3DF" : "#BDDDE4")};
  transition: all 0.2s;

  img {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 0.75rem;
  }
`;
