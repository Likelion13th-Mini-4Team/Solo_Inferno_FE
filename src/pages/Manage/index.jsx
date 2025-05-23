import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ useLocation 추가
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamManageForm from '../../components/Manage/TeamManageForm';
import './ManagePage.css';

function ManagePage() {
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ 삭제된 팀과 생성된 팀 받기
  const { deletedTeamId, newTeam } = location.state || {};

  const teams = [
    { id: 1, name: '솔로지옥 시즌 1', description: '저희는 이게 매력적 입니다~!', quote: '진짜 재밌다 ㅋ' },
    { id: 2, name: '솔로지옥 시즌 2', description: '저희는 이게 매력적 입니다~!', quote: '진짜 재밌다 ㅋ' },
    { id: 3, name: '솔로지옥 시즌 3', description: '저희는 이게 매력적 입니다~!', quote: '진짜 재밌다 ㅋ' },
  ];

  // ✅ 삭제된 팀은 제외, 생성된 팀은 추가
  let updatedTeams = [...teams];

  if (deletedTeamId) {
    updatedTeams = updatedTeams.filter((team) => team.id !== deletedTeamId);
  }

  if (newTeam) {
    updatedTeams.push(newTeam);
  }

  const handleEditToggle = () => {
    if (isEditMode) {
      setIsEditMode(false);
      setSelectedTeamId(null);
    } else {
      setIsEditMode(true);
    }
  };

  const handleTeamSelect = (teamId) => {
    if (isEditMode) setSelectedTeamId(teamId);
  };

  const handleFinalButton = () => {
    if (isEditMode) {
      if (selectedTeamId) {
        navigate('/tmodify', {
          state: {
            teamId: selectedTeamId,
          },
        });
      }
    } else {
      navigate('/create');
    }
  };

  return (
    <div className="manage-wrapper" style={{ paddingTop: '24px', paddingBottom: '100px' }}>
      <Header />
      <main className="manage-container">
        <div className="edit-wrapper">
          <button className="edit-btn" onClick={handleEditToggle}>
            {isEditMode ? '수정 취소' : '팀 수정하기'}
          </button>
        </div>

        {isEditMode && (
          <p className="edit-tip">수정을 원하는 팀을 선택해주세요.</p>
        )}

        {updatedTeams.map((team) => (
          <TeamManageForm
            key={team.id}
            team={team}
            isSelected={team.id === selectedTeamId}
            onSelect={() => handleTeamSelect(team.id)}
          />
        ))}

        <button
          className="create-btn"
          onClick={handleFinalButton}
          disabled={isEditMode && !selectedTeamId}
        >
          {isEditMode ? '수정하기' : '팀 생성하기'}
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default ManagePage;
