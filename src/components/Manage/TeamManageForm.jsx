import React from 'react';

function TeamManageForm({ team }) {
  return (
    <div className="team-card">
      <p><strong className="team-name">{team.name}</strong></p>
      <p>팀 소개 : {team.description}</p>
      <p>팀 한마디 : {team.quote}</p>
    </div>
  );
}

export default TeamManageForm;
