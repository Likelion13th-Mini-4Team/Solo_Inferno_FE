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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Pretendard';
`;
