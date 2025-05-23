import React, { useState } from 'react';
import './MatchRequestCard.css';
import MainDetailModal from '../Main/MainDetailModal'; // ✅ 모달 불러오기

function MatchRequestCard({ teamName }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ 모달 열림 여부 상태

  return (
    <div className="match-card">
      <p className="match-text">{teamName}에게 매칭 요청이 왔어요!</p>

      <div className="match-buttons">
        <button className="view-team-btn" onClick={() => setIsModalOpen(true)}>
          팀 보기
        </button>
      </div>

      {/* ✅ 버튼을 누르면 모달이 보임 */}
      {isModalOpen && (
        <MainDetailModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default MatchRequestCard;
