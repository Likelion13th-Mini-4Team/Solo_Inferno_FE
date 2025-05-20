import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TingleLogo } from '../../images/Start/tingle.svg';
import HakgyoFont from '../../styles/fonts/HakgyoansimDunggeunmiso-B.ttf';

const LocalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'HakgyoansimDunggeunmiso';
    src: url(${HakgyoFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

function Start() {
  const navigate = useNavigate();

  return (
    <>
      <LocalFontStyle />
      <Container>
        <Logo />
        <SubText>외대인들을 위한 과팅 앱</SubText>
        <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
      </Container>
    </>
  );
}

export default Start;

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Logo = styled(TingleLogo)`
  width: 170px;
  margin-bottom: -90px;
  margin-top: -300px;
`;

const SubText = styled.p`
  font-family: 'HakgyoansimDunggeunmiso', sans-serif;
  font-size: 20px;
  color: #7F57FA;
  margin-bottom: 60px;
`;

const LoginButton = styled.button`
  font-family: 'HakgyoansimDunggeunmiso', sans-serif;
  border: 1px solid #7F57FA;
  background: transparent;
  color: #7F57FA;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 55px;
  border-radius: 30px;
  cursor: pointer;
`;
