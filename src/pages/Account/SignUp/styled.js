import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  border-radius: 20px 20px 0 0;
`;

export const Button = styled.button`
  width: 80%;
  padding: 1.25rem;
  background-color: #9fb3df;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #9ec6f3;
  }

  &:disabled {
    background-color: #bddde4;
    cursor: not-allowed;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 12px;
  margin: 0.5rem 0;
  width: 80%;
  margin-left: 0;

  input[type="checkbox"] {
    accent-color: #9fb3df;
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 0.75rem;
  color: #9fb3df;
  font-size: 1rem;
`;

export const NicknameStatus = styled.p`
  font-size: 0.85rem;
  margin-top: 0.15rem;
  padding-left: 0;
  text-align: left;
  color: ${(props) =>
    props.isAvailable === null
      ? "#999"
      : props.isAvailable === true
      ? "#9FB3DF"
      : "#FF6B6B"};
`;
