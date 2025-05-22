import React from 'react';
import './MatchRequestCard.css';

function MatchRequestCard({ teamName }) {
  return (
    <div className="match-card">
      <p className="match-text">{teamName}에게 매칭 요청이 왔어요!</p>
      <div className="match-buttons">
        <button className="accept-btn">수락하기</button>
        <button className="reject-btn">거절하기</button>
      </div>
    </div>
  );
}

export default MatchRequestCard;
