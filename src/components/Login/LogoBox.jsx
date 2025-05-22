// src/components/Login/LogoBox.jsx
import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.jpg'; // 경로는 프로젝트 구조에 맞게 수정

const LogoBox = () => {
  return <Logo src={logo} alt="logo" />;
};

export default LogoBox;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 40px;
`;
