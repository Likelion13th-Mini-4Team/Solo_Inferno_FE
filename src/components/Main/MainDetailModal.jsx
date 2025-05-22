import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 312px;
  margin: 0 auto;
  border: 2px solid #7E5EFF;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TeamImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #7E5EFF;
`;

const TeamDesc = styled.div`
  font-size: 14px;
  color: #444;
  margin-top: 2px;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 4px;
  margin-top: 16px;
  font-size: 14px;

  th {
    text-align: left;
    font-weight: bold;
    color: #333;
    padding-bottom: 6px;
  }

  td {
    padding: 4px 6px;
  }
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  margin-top: 18px;
  margin-bottom: 6px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  gap: 10px;
`;

const ActionButton = styled.button`
  flex: 1;
  background-color: #7E5EFF;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const MainDetailModal = ({ team, onClose }) => {
  if (!team) return null;

  const members = [
    { name: '이건휘', studentId: 18, age: 28, major: '산업경영공학과' },
    { name: '배주원', studentId: 22, age: 26, major: '정보통신공학과' },
    { name: '이유준', studentId: 24, age: 21, major: '컴퓨터공학과' }
  ];

  return (
    <Modal>
      <CloseButton onClick={onClose}>×</CloseButton>

      <TeamHeader>
        <TeamImage src={team.image} alt={team.name} />
        <TeamInfo>
          <TeamName>{team.name}</TeamName>
          <TeamDesc>{team.desc}</TeamDesc>
        </TeamInfo>
      </TeamHeader>

      <Table>
        <thead>
          <tr>
            <th>이름</th>
            <th>학번</th>
            <th>나이</th>
            <th>학과</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, idx) => (
            <tr key={idx}>
              <td>{member.name}</td>
              <td>{member.studentId}</td>
              <td>{member.age}</td>
              <td>{member.major}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <SectionTitle>팀 소개</SectionTitle>
      <Paragraph>
        호날두를 좋아하는 공대생들 입니다!!<br />
        siu 호날두를 좋아하는 공대생들 입니다!!<br />
        siu 호날두를 좋아하는 공대생들 입니다!! siu
      </Paragraph>

      <ButtonContainer>
        <ActionButton>매칭하기</ActionButton>
        <ActionButton onClick={onClose}>창닫기</ActionButton>
      </ButtonContainer>
    </Modal>
  );
};

export default MainDetailModal;
