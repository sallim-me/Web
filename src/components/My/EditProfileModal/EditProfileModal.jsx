import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  z-index: 1001;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 20px;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &.primary {
    background-color: #9fb3df;
    color: white;
  }

  &.secondary {
    background-color: #eee;
    color: #333;
  }
`;

const EditProfileModal = ({ show, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { name: "", nickname: "" }
  );

  useEffect(() => {
    setFormData(initialData || { name: "", nickname: "" });
  }, [initialData, show]); // show 상태가 변경될 때도 초기화

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>회원 정보 수정</Title>
        <InputGroup>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </InputGroup>
        <ButtonGroup>
          <Button className="secondary" onClick={onClose}>
            취소
          </Button>
          <Button className="primary" onClick={handleSave}>
            저장
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditProfileModal;
