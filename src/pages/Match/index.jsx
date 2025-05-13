import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MatchRequestCard from '../../components/Match/MatchRequestCard';
import MatchCompleteCard from '../../components/Match/MatchCompleteCard';
import './MatchPage.css';

function Match() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>매칭 페이지</h1>

        {/* 요청 카드 */}
        <MatchRequestCard teamName="솔로지옥 시즌 1팀" />
        <MatchRequestCard teamName="솔로지옥 시즌 2팀" />

        {/* 완료 카드 */}
        <MatchCompleteCard teamName="솔로지옥 시즌 3팀" />
      </main>
      <Footer />
    </>
  );
}

export default Match;
