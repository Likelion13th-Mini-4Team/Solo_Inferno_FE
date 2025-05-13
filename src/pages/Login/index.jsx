import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../images/Start/logo.jpg';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [popup, setPopup] = useState(false);

  const handleLogin = () => {
    // 실제 로그인 로직은 나중에 Axios로 대체
    if (id === 'admin' && pw === '1234') {
      alert('로그인 성공!');
      setError('');
    } else {
      if (id !== 'admin') {
        setPopup(true); // 모달 오픈
      } else {
        setError('올바르지 않은 비밀번호입니다.');
      }
    }
  };

  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Title>로그인</Title>

    <InputWrapper>
      <Label>ID</Label>
      <Input value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력해주세요." />
    </InputWrapper>

    <InputWrapper>
      <Label>PW</Label>
      <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력해주세요." />
      {error && <Error>{error}</Error>}
    </InputWrapper>

      <LoginButton onClick={handleLogin}>LOGIN</LoginButton>

      <JoinText>
        아이디가 없으신가요? <JoinLink href="#">회원가입</JoinLink>
      </JoinText>

      {popup && (
        <Modal>
          <ModalText>아이디 또는 비밀번호가 일치하지 않습니다.</ModalText>
          <ModalButton onClick={() => setPopup(false)}>확인</ModalButton>
        </Modal>
      )}
    </Wrapper>
  );
};

export default LoginPage;


//스타일 코드
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: 'Pretendard';
`;

const Logo = styled.img`
  width: 180px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: bold; 
  text-align: center;
`;

const Label = styled.label`
  align-self: flex-start;
  margin-left: 5px;
  margin-top: 10px;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  width: 300px;
  padding: 12px 16px;
  margin-top: 4px;
  border: none;
  border-radius: 25px;
  background-color: #f1f3ff;
  font-size: 14px;
  outline: none;
`;

const Error = styled.p`
  font-size: 13px;
  color: #a14cf3;
  margin: 4px 0 16px 0;
  align-self: flex-start;
  margin-left: 24px;
`;

const LoginButton = styled.button`
  margin-top: 20px;
  width: 180px;
  padding: 12px;
  border: none;
  border-radius: 25px;
  background-color: #aab3ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #8a95f0;
  }
`;

const JoinText = styled.p`
  font-size: 14px;
  margin-top: 24px;
`;

const JoinLink = styled.a`
  color: #a14cf3;
  text-decoration: none;
  font-weight: bold;
`;

const Modal = styled.div`
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e4e7ff;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const ModalText = styled.p`
  margin-bottom: 16px;
  font-weight: bold;
`;

const ModalButton = styled.button`
  padding: 8px 20px;
  border: none;
  background-color: #a597f2;
  color: white;
  border-radius: 6px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-bottom: 16px;
`;

