import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.$width || "80%"};
  padding: ${(props) => props.$padding || "1.25rem"};
  background-color: ${(props) =>
    props.variant === "secondary" ? "transparent" : "#9FB3DF"};
  color: ${(props) => (props.variant === "secondary" ? "#9FB3DF" : "white")};
  border: 2px solid #9fb3df;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    background-color: ${(props) =>
      props.variant === "secondary" ? "transparent" : "#BDDDE4"};
    border-color: ${(props) =>
      props.variant === "secondary" ? "#BDDDE4" : "none"};
    color: ${(props) => (props.variant === "secondary" ? "#BDDDE4" : "white")};
    cursor: not-allowed;
  }
`;
