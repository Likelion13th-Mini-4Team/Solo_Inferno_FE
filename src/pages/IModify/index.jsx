import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SaveModal from '../../components/IModify/SaveConfirmModal';

const Container = styled.div`
  padding: 32px 24px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  max-width: 390px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: -20px;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const Underlined = styled.div`
  font-size: 16px;       
  font-weight: 600;
  margin-bottom: 18px;
  border-bottom: 3px solid #A588FF;
  padding-bottom: 4px;
  display: inline-block;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1.5px solid #7467C1;
  background-color: #f4f0fe;
  color: #333;
  font-size: 14px;
  height: 40px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 13px;
  border: 1.5px solid #7467C1;
  background-color: #f4f0fe;
  border-radius: 0;
  font-size: 14px;
  height: 40px;
  color: #333;

  &::placeholder {
    color: #999;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 11px 28px;
  border-radius: 8px;
  background-color: #D7CFFF;
  border: 1.5px solid #7467C1;
  font-size: 18px;
  cursor: pointer;
`;

export default function IModify() {
  const [major, setMajor] = useState('컴퓨터공학부');
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [showModal, setShowModal] = useState(false); 

  const handleConfirm = () => {
    console.log('저장됨!', { major, currentPw, newPw });
    setShowModal(false);
  };


  return (
    <>
      <Header />
      <Container>
        <Title>회원정보 수정</Title>

        <Section>
          <Underlined>학과 변경</Underlined>
          <Select value={major} onChange={e => setMajor(e.target.value)}>
            <option value="컴퓨터공학부">컴퓨터공학부</option>
            <option value="전자공학부">전자공학부</option>
            <option value="생명공학과">생명공학과</option>
            <option value="통계학과">통계학과</option>
          </Select>
        </Section>

        <Section>
          <Underlined>비밀번호 변경</Underlined>
          <Label>현재 비밀번호</Label>
          <Input
            type="password"
            placeholder="현재 비밀번호를 입력해주세요."
            value={currentPw}
            onChange={e => setCurrentPw(e.target.value)}
          />
          <Label>변경할 비밀번호</Label>
          <Input
            type="password"
            placeholder="변경하실 비밀번호를 입력해주세요."
            value={newPw}
            onChange={e => setNewPw(e.target.value)}
          />
        </Section>

        <Button onClick={() => setShowModal(true)}>수정완료</Button>

        {showModal && (
          <SaveModal
            onCancel={() => setShowModal(false)}
            onConfirm={handleConfirm}
          />
        )}
      </Container>
      <Footer />
    </>
  );
}
