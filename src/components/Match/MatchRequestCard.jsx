import React, { useState } from 'react';
import './MatchRequestCard.css';
import MainDetailModal from '../Main/MainDetailModal';

function MatchRequestCard({ teamName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const teamInfo = {
    name: teamName,
    desc: '우리 팀을 한 줄로 소개합니다!',
    image: '/images/sample.png',
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleAccept = () => {
    setIsModalOpen(false);
    setIsVisible(false);
  };
  const handleReject = () => {
    setIsModalOpen(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="match-card">
      <p className="match-text">{teamName}에게 매칭 요청이 왔어요!</p>
      <div className="match-buttons">
        <button className="view-team-btn" onClick={handleOpenModal}>
          팀 보기
        </button>
      </div>

      {isModalOpen && (
        <MainDetailModal
          team={teamInfo}
          onClose={handleCloseModal}
          customButtons={
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {/* ✅ 거절하기 왼쪽, 수락하기 오른쪽 */}
              <button
                style={{
                  flex: 1,
                  backgroundColor: '#BCB6FD',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '10px 0',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={handleReject}
              >
                거절하기
              </button>
              <button
                style={{
                  flex: 1,
                  backgroundColor: '#7E5EFF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '10px 0',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
                onClick={handleAccept}
              >
                수락하기
              </button>
            </div>
          }
        />
      )}
    </div>
  );
}

export default MatchRequestCard;
