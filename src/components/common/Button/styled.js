import styled from "styled-components";

const getButtonStyles = (size, variant) => {
  const styles = {
    big1: {
      width: "80%",
      padding: "1.25rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      backgroundColor: "#9FB3DF",
      color: "white",
    },
    big2: {
      width: "80%",
      padding: "1.25rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      backgroundColor: "transparent",
      color: "#9FB3DF",
    },
    small1: {
      width: "auto",
      padding: "0.5rem",
      fontSize: "0.8rem",
      fontWeight: 400,
      backgroundColor: "#9FB3DF",
      color: "white",
    },
    small2: {
      width: "auto",
      padding: "0.5rem",
      fontSize: "0.8rem",
      fontWeight: 400,
      backgroundColor: "transparent",
      color: "#9FB3DF",
    },
  };

  return styles[`${size}${variant}`] || styles.big1;
};

export const Button = styled.button`
  width: ${(props) => getButtonStyles(props.size, props.variant).width};
  padding: ${(props) => getButtonStyles(props.size, props.variant).padding};
  background-color: ${(props) =>
    getButtonStyles(props.size, props.variant).backgroundColor};
  color: ${(props) => getButtonStyles(props.size, props.variant).color};
  border: 2px solid #9fb3df;
  border-radius: 12px;
  font-size: ${(props) => getButtonStyles(props.size, props.variant).fontSize};
  font-weight: ${(props) =>
    getButtonStyles(props.size, props.variant).fontWeight};
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    background-color: ${(props) =>
      props.variant === "2" ? "transparent" : "#BDDDE4"};
    border-color: ${(props) => (props.variant === "2" ? "#BDDDE4" : "none")};
    color: ${(props) => (props.variant === "2" ? "#BDDDE4" : "white")};
    cursor: not-allowed;
  }
`;
