import styled from "styled-components";

export const Button = styled.button`
  width: 80%;
  padding: 1.25rem;
  background-color: ${(props) =>
    props.variant === "secondary" ? "transparent" : "#9FB3DF"};
  color: ${(props) => (props.variant === "secondary" ? "#9FB3DF" : "white")};
  border: ${(props) =>
    props.variant === "secondary" ? "2px solid #9FB3DF" : "none"};
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary" ? "#" : "#9EC6F3"};
  }

  &:disabled {
    background-color: ${(props) =>
      props.variant === "secondary" ? "transparent" : "#BDDDE4"};
    border-color: ${(props) =>
      props.variant === "secondary" ? "#BDDDE4" : "none"};
    color: ${(props) => (props.variant === "secondary" ? "#BDDDE4" : "white")};
    cursor: not-allowed;
  }
`;
