import React from 'react';
import './MatchCompleteCard.css';

function MatchCompleteCard({ teamName }) {
  return (
    <div className="match-card complete">
      <p className="match-text">{teamName}과 매칭되었습니다!</p>
      <button className="chat-btn">채팅하러 가기</button>
    </div>
  );
}

export default MatchCompleteCard;
