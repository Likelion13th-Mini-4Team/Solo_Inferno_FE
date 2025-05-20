import React from 'react';
import './ManagePage.css';

const EmptyTeamMessage = () => {
  return (
    <div className="empty-message">
      <p className="no-team-text">아직 팀이 없으시네요!</p>
      <button className="create-link">팀 생성하러가기</button>
    </div>
  );
};

export default EmptyTeamMessage;
