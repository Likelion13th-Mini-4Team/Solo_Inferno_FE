// src/components/Manage/EmptyTeamMessage.jsx
import React from 'react';
import './ManagePage.css';

function EmptyTeamMessage() {
  return (
    <div className="empty-team-container">
      <h2>아직 팀이 없으시네요!</h2>
      <a href="#" className="create-link">팀 생성하러가기</a>
    </div>
  );
}

export default EmptyTeamMessage;
