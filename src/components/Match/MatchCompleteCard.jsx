// src/components/Match/MatchCompleteCard.jsx

import React from 'react';
import './MatchCompleteCard.css';

function MatchCompleteCard({ teamName }) {
  return (
    <div className="match-card complete">
      <div className="match-complete-content">
        <span className="match-text">{teamName}과 매칭되었습니다!</span>
        <button className="chat-btn">채팅하러 가기</button>
      </div>
    </div>
  );
}

export default MatchCompleteCard;
