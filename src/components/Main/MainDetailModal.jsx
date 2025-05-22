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
  align-self: flex-end;      // 부모 컨테이너의 세로 방향 끝(오른쪽 상단)으로 정렬 (Flex 컨테이너일 때)
  font-size: 30px;           // 버튼 텍스트 크기 (보통 X 아이콘)
  background: none;          // 배경 제거 (투명 버튼)
  border: none;              // 테두리 제거
  cursor: pointer;           // 마우스를 올리면 포인터(손가락) 표시
  float: right;              // 오른쪽으로 띄워서 배치 (position이 없을 경우 사용 가능)
  margin-top: -8px;          // 버튼을 위로 8px 올림 (간격 조정용)
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
  width: 100%;                 // 부모 기준 100%
  border-spacing: 0 4px;       // 셀 사이 세로 간격 4px
  margin-top: 16px;            // 위 여백
  font-size: 14px;
  table-layout: fixed;         // ✅ 셀 너비 고정

  th, td {
    text-align: center;        // ✅ 모두 가운데 정렬
  }

  th {
    font-weight: bold;
    color: #333;
    padding-bottom: 6px;
  }

  td {
    padding: 4px 6px;
  }

  // ✅ 열 너비 고정
  th:nth-child(1), td:nth-child(1) { width: 35%; } // 닉네임
  th:nth-child(2), td:nth-child(2) { width: 15%; } // 나이
  th:nth-child(3), td:nth-child(3) { width: 50%; } // 학과

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
                <td>{member.name}</td> {/* 닉네임으로 사용 */}
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
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

export default MainDetailModal;
