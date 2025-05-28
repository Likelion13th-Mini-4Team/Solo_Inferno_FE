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

  const members = [
    { name: '차라투스트라', studentId: 18, age: 28, major: '산업경영공학과' },
    { name: '김두한', studentId: 22, age: 26, major: '정보통신공학과' },
    { name: '펭수', studentId: 24, age: 21, major: '컴퓨터공학과' }
  ];

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
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
              <th>닉네임</th>
              <th>나이</th>
              <th>학과</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, idx) => (
              <tr key={idx}>
                <td>{member.name}</td>
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

        {/* ✅ 버튼 선택적으로 렌더링 */}
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