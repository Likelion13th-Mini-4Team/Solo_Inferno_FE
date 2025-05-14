import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 2px solid #7E5EFF;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 360px;        // ← 가로 폭 제한
  width: 100%;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  margin-right: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: #4A00E0;
`;

const Description = styled.div`
  font-size: 14px;
  color: #444;
`;

const MainTeamCard = ({ team, onClick }) => {
  return (
    <Card onClick={onClick}>
      <Image src={team.image} alt={team.name} />
      <TextContainer>
        <TeamName>{team.name}</TeamName>
        <Description>{team.desc}</Description>
      </TextContainer>
    </Card>
  );
};

export default MainTeamCard;
