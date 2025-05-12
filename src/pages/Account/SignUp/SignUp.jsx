import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input/Input";
import * as S from "./styled";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    nickname: "",
    isBuyer: false,
  });

  const [errors, setErrors] = useState({});
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(null);
  const nicknameTimeoutRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "nickname") {
      setIsNicknameAvailable(null);
      if (nicknameTimeoutRef.current) {
        clearTimeout(nicknameTimeoutRef.current);
      }
    }
  };

  useEffect(() => {
    if (formData.nickname) {
      nicknameTimeoutRef.current = setTimeout(() => {
        // 실제로는 API 호출로 중복 확인
        // 임시로 랜덤하게 결정
        const isAvailable = Math.random() > 0.5;
        setIsNicknameAvailable(isAvailable);
      }, 1000);
    }

    return () => {
      if (nicknameTimeoutRef.current) {
        clearTimeout(nicknameTimeoutRef.current);
      }
    };
  }, [formData.nickname]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "아이디를 입력해주세요";
    if (!formData.password) newErrors.password = "비밀번호를 입력해주세요";
    if (!formData.name) newErrors.name = "이름을 입력해주세요";
    if (!formData.nickname) newErrors.nickname = "닉네임을 입력해주세요";
    if (formData.nickname.length > 10)
      newErrors.nickname = "닉네임은 10자 이내로 입력해주세요";
    if (isNicknameAvailable === false)
      newErrors.nickname = "이미 사용 중인 닉네임입니다";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // 회원가입 처리 로직
      console.log("회원가입 성공:", formData);
      navigate("/login");
    }
  };

  return (
    <S.SignUpContainer>
      <S.Form onSubmit={handleSubmit}>
        <Input
          label="아이디"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          label="비밀번호"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          label="비밀번호 확인"
          name="passwordCheck"
          type="password"
          value={formData.passwordCheck}
          onChange={handleChange}
          error={errors.passwordCheck}
        />
        <Input
          label="이름"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="닉네임"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          error={errors.nickname}
        />
        {formData.nickname && (
          <S.NicknameStatus isAvailable={isNicknameAvailable}>
            {isNicknameAvailable === null
              ? "닉네임 확인 중..."
              : isNicknameAvailable
              ? "사용 가능한 닉네임입니다"
              : "이미 사용 중인 닉네임입니다"}
          </S.NicknameStatus>
        )}
        <S.CheckboxContainer>
          <input
            type="checkbox"
            id="isBuyer"
            name="isBuyer"
            checked={formData.isBuyer}
            onChange={handleChange}
          />
          <S.CheckboxLabel htmlFor="isBuyer">바이어 여부</S.CheckboxLabel>
        </S.CheckboxContainer>
        <S.Button type="submit">회원가입</S.Button>
      </S.Form>
    </S.SignUpContainer>
  );
};

export default SignUp;
