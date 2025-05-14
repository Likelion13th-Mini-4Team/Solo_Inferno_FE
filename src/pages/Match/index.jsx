// src/pages/Match/index.jsx

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MatchRequestCard from '../../components/Match/MatchRequestCard';
import './MatchPage.css';

function Match() {
  const [requests, setRequests] = useState([
    { id: 1, teamName: '솔로지옥 시즌 1팀', matched: false },
    { id: 2, teamName: '한국외대', matched: false },
  ]);
  const [matchedTeam, setMatchedTeam] = useState(null);

  const handleAccept = (id, teamName) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, matched: true } : item
      )
    );
    setMatchedTeam(teamName);
  };

  const handleReject = (id) => {
    setRequests((prev) => prev.filter((item) => item.id !== id));
  };

  const closeModal = () => {
    setMatchedTeam(null);
  };

  const getMatchingPostposition = (word) => {
    const lastChar = word[word.length - 1];
    const code = lastChar.charCodeAt(0);
    const hasJongseong = (code - 44032) % 28 !== 0;
    return hasJongseong ? '과' : '와';
  };

  return (
    <div className="page-container">
      <Header />
      <main className="matching-page">
        {requests.map((req) => (
          <MatchRequestCard
            key={req.id}
            teamName={req.teamName}
            matched={req.matched}
            onAccept={() => handleAccept(req.id, req.teamName)}
            onReject={() => handleReject(req.id)}
          />
        ))}

        {matchedTeam && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <p>
                {matchedTeam}
                {getMatchingPostposition(matchedTeam)} 매칭되었습니다!
              </p>
              <button className="modal-confirm-btn" onClick={closeModal}>
                확인
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Match;
