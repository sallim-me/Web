import styled from "styled-components";

export const InputContainer = styled.div`
  width: 80%;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  color: #000000;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 2px solid #bddde4;
  font-size: 1rem;
  background-color: transparent;
  transition: all 0.2s;
  color: #000000;

  &:focus {
    outline: none;
    border-bottom-color: #9fb3df;
  }

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
    border-bottom-color: #bddde4;
  }

  &::placeholder {
    color: #bddde4;
    font-size: 0.95rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff6b6b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding-left: 0;
`;
