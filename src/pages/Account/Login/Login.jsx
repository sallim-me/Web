import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import Input from "../../../components/Input/Input";
import Button from "../../../components/common/Button/Button";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
    console.log("Login form submitted:", formData);
  };

  return (
    <S.SignUpContainer>
      <S.Form onSubmit={handleSubmit}>
        <Input
          label="아이디"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" size="big" variant="1">
          로그인
        </Button>
        <Button
          type="button"
          size="big"
          variant="2"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </Button>
      </S.Form>
    </S.SignUpContainer>
  );
};

export default Login;
