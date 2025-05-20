import React from 'react';
import './TeamModifyForm.css';

function TeamModifyForm({ team }) {
  return (
    <div className="team-card">
      <p>
        팀명 : <strong>{team.name}</strong>
      </p>
      <p>팀 소개 : {team.description}</p>
      <p>팀 한마디 : {team.quote}</p>
    </div>
  );
}

export default TeamModifyForm;
