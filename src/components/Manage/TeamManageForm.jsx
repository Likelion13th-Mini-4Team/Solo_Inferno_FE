import React from 'react';
import '../../pages/Manage/ManagePage.css';

function TeamManageForm({ team, isSelected, onSelect }) {
  return (
    <div
      className={`team-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <p><strong className="team-name">{team.name}</strong></p>
      <p>팀 소개 : {team.description}</p>
      <p>팀 한마디 : {team.quote}</p>
    </div>
  );
}

export default TeamManageForm;