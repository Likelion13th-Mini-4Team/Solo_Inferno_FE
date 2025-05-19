import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoutModal from '../../components/My/logoutmodal';
import DeleteModal from '../../components/My/DeleteModal';
import { WomanIcon } from '../../images/My/icons';



const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px;
  background-color: #fff;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 300px;
  height: 330px;
  border: 2px solid #7467C1;
  border-radius: 20px;
  padding: 38px;
  max-width: 350px;
  margin: 0 auto;
  background-color: #F8F5FF;
`;

const IconWrapper = styled.span`
  display: inline-block;
  position: relative;
  top: 6px; 
  left: 4px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: -10px;
  font-size: 21px;

  span {
    margin-left: 4px;
  }
`;


const InfoList = styled.div`
  margin-top: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Label = styled.div`
  color: #737373;
  font-weight: 500;
  font-size: 15px;
`;

const Value = styled.div`
  color: #737373;
  font-weight: bold;
  font-size: 13px;
`;

const ActionBox = styled.div`
  width: 301px;
  border: 2px solid #7467C1;
  border-radius: 20px;
  padding: 20px;
  max-width: 350px;
  margin: 30px auto 2px;
  background-color: #F8F5FF;
`;

const Action = styled.div`
  padding: 8px 10px;
  cursor: pointer;
  color: #7467C1;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;



  export default function My() {
    const [showLogout, setShowLogout] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
  
    const handleLogout = () => {
      setShowLogout(false);
      alert('로그아웃 처리되었습니다');
    };
  
    const handleDelete = () => {
      setShowDelete(false);
      alert('탈퇴 처리되었습니다');
    };
  
    const userInfo = [
      { label: '출생년도', value: '2003' },
      { label: '학과', value: '컴퓨터공학부' },
      { label: '닉네임', value: '커플천국' },
      { label: '아이디', value: 'hufs2345' },
      { label: '비밀번호', value: '123456' },
      { label: '이메일', value: 'hufs2345@hufs.ac.kr' },
    ];
  
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Title>솔로지옥님   
          <IconWrapper><WomanIcon /></IconWrapper>
          </Title>
          <InfoList>
            {userInfo.map(({ label, value }) => (
              <InfoItem key={label}>
                <Label>{label}</Label>
                <Value>{value}</Value>
              </InfoItem>
            ))}
          </InfoList>
        </Card>

        <ActionBox>
          <Action>회원정보 수정</Action>
          <Action onClick={() => setShowLogout(true)}>로그아웃</Action>
          <Action onClick={() => setShowDelete(true)}>탈퇴하기</Action>
        </ActionBox>
      </Container>
      <Footer />

      {showLogout && (
        <LogoutModal onConfirm={handleLogout} onCancel={() => setShowLogout(false)} />
      )}
      {showDelete && (
        <DeleteModal onConfirm={handleDelete} onCancel={() => setShowDelete(false)} />
      )}
    </>
  );
}