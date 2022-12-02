import React, { useState } from "react";
import styled from "styled-components";

import type { FC } from "react";

const Image = styled.img``;

const LoginInput = styled.input`
  background: #f3f3f3;
  border-radius: 52px;
  width: 706px;
  height: 98px;
  border: 0;
  margin: 24px;
  font-size: 40px;
  padding: 16px;
`;

const LoginButton = styled.button`
  background: #ea1d1d;
  border-radius: 52px;
  width: 706px;
  height: 98px;
  border: 0;
  margin: 24px;
  font-size: 40px;
  padding: 16px;
  color: white;
  text-align: center;
`;

const Box = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 40px;
`;

const Link = styled.span`
  font-size: 24px;
  color: #8d8d8d;

  &:hover {
    text-decoration: underline;
    cursor: default;
  }
`;

const Login: FC = () => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = () => {
    if (!id.trim().length) {
      console.log("아이디를 입력해주세요.");
    } else if (!pwd.trim().length) {
      console.log("비밀번호를 입력해주세요.");
    } else {
      console.log("로그인");
    }
  };

  return (
    <Box>
      <img src="/images/logo.png" />
      <Title>서비스 이름</Title>
      <LoginInput
        placeholder="ID"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setId(e.currentTarget.value)
        }
      />
      <LoginInput
        type="password"
        placeholder="비밀번호"
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setPwd(e.currentTarget.value)
        }
      />
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      <Link>아직 회원이 아니신가요?</Link>
    </Box>
  );
};

export default Login;
