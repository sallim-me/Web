import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 60px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
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

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 14px;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #333;
  }
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 14px;
  margin-top: -0.5rem;
  text-align: center;
  width: 100%;
`;
