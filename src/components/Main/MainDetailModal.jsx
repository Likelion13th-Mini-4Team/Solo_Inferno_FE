import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  background: rgba(0, 0, 0, 0.0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

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
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
  margin-top: -8px;
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
  table-layout: fixed;

  th, td {
    text-align: center;
  }

  th {
    font-weight: bold;
    color: #333;
    padding-bottom: 6px;
  }

  td {
    padding: 4px 6px;
  }

  th:nth-child(1), td:nth-child(1) { width: 35%; }
  th:nth-child(2), td:nth-child(2) { width: 15%; }
  th:nth-child(3), td:nth-child(3) { width: 50%; }
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

const MainDetailModal = ({ team, onClose, customButtons }) => {
  if (!team) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        <TeamHeader>
          <TeamImage src={team.image} alt={team.name} />
          <TeamInfo>
            <TeamName>{team.name}</TeamName>
            <TeamDesc>{team.description}</TeamDesc>
          </TeamInfo>
        </TeamHeader>

        <Table>
          <thead>
            <tr>
              <th>이름</th>
              <th>학번</th>
              <th>학과</th>
            </tr>
          </thead>
          <tbody>
            {team.members?.map((member, idx) => (
              <tr key={idx}>
                <td>{member.이름}</td>
                <td>{member.학번}</td>
                <td>{member.학과}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <SectionTitle>팀 소개</SectionTitle>
        <Paragraph>
          {team.팀소개?.split('\n').map((line, idx) => (
            <span key={idx}>{line}<br /></span>
          ))}
        </Paragraph>

        {customButtons ? customButtons : (
          <ButtonContainer>
            <ActionButton>매칭하기</ActionButton>
          </ButtonContainer>
        )}
      </Modal>
    </Overlay>
  );
};

export default MainDetailModal;
