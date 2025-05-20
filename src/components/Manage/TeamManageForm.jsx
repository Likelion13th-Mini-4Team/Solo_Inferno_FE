import React from 'react';
import './ManagePage.css';

const TeamManageForm = ({ team }) => {
  return (
    <div className="team-card">
      <p><strong>팀명 :</strong> {team.name}</p>
      <p><strong>팀 소개 :</strong> {team.intro}</p>
      <p><strong>팀 한마디 :</strong> {team.comment}</p>
    </div>
  );
};

export default TeamManageForm;
