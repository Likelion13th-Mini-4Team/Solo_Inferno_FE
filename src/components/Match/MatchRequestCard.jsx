// src/components/Match/MatchRequestCard.jsx

import React from 'react';
import './MatchRequestCard.css';

function MatchRequestCard({ teamName, matched, onAccept, onReject }) {
  const getPostposition = (word) => {
    const lastChar = word[word.length - 1];
    const code = lastChar.charCodeAt(0);
    const hasJongseong = (code - 44032) % 28 !== 0;
    return hasJongseong ? '과' : '와';
  };

  return (
    <div className={`match-card ${matched ? 'complete' : 'request'}`}>
      <p className="match-text">
        {matched
          ? `${teamName}${getPostposition(teamName)} 매칭되었습니다!`
          : `${teamName}에게 매칭 요청이 왔어요!`}
      </p>

      <div className="match-buttons">
        {matched ? (
          <button className="chat-btn">채팅하러 가기</button>
        ) : (
          <>
            <button className="accept-btn" onClick={onAccept}>수락하기</button>
            <button className="reject-btn" onClick={onReject}>거절하기</button>
          </>
        )}
      </div>
    </div>
  );
}

export default MatchRequestCard;
