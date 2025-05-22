// src/pages/Login/index.jsx
import React from 'react';
import styled from 'styled-components';
import LogoBox from '../../components/Login/LogoBox';
import LoginForm from '../../components/Login/LoginForm';

const LoginPage = () => {
  return (
    <Wrapper>
      <LogoBox />
      <LoginForm />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;                     // Flexbox 레이아웃 사용
  flex-direction: column;           // 세로 방향으로 정렬
  align-items: center;              // 가로축 기준 중앙 정렬 (가운데 정렬)
  padding: 40px 20px;               // 위아래 40px, 좌우 20px 여백
  gap: 8px;
`;

