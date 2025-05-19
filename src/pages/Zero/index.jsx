import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Zero() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <ContentContainer>
        <Message>아직 팀이 없으시네요!</Message>
        <CreateTeam onClick={() => navigate('/create')}>팀 생성하러가기</CreateTeam>
      </ContentContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  align-items: center;     
`;

const Message = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const CreateTeam = styled.button`
  background: none;
  border: none;
  color: #4F4FFF;
  font-size: 14px;
  cursor: pointer;
  padding-top: 20px;
  font-weight: 500
`;
