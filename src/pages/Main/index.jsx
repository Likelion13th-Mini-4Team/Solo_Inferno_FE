// src/pages/Main/index.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainTeamCard from '../../components/Main/MainTeamCard';
import MainDetailModal from '../../components/Main/MainDetailModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// 이미지 import
import Dog from '../../images/emojis/Dog.png';
import Cat from '../../images/emojis/Cat.png';
import Rabbit from '../../images/emojis/Rabbit.png';
import Tiger from '../../images/emojis/Tiger.png';

// 이미지 매핑
const imageMap = {
  'Dog.png': Dog,
  'Cat.png': Cat,
  'Rabbit.png': Rabbit,
  'Tiger.png': Tiger
};

const MainPage = () => {
  // 팀 목록, 선택 팀, 로딩/에러 상태
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1) 팀 목록 API 호출
  useEffect(() => {
    axios.get('http://3.34.1.245:8080/api/teams')
      .then((res) => {
        const teams = res.data.teams || [];
        setTeamList(teams);
      })
      .catch((err) => {
        console.error("팀 목록 불러오기 실패", err);
        setError('팀 목록을 불러오는 데 실패했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 로딩 / 에러 처리
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        팀 목록을 불러오는 중...
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <div
        style={{
          maxWidth: '390px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#ffffff'
        }}
      >
        <Header />

        {/* 2) 선택된 팀이 있으면 모달로 상세 보기 */}
        {selectedTeam && (
          <MainDetailModal
            team={{
              ...selectedTeam,
              // 이미지 매핑
              image: imageMap[selectedTeam.image] || selectedTeam.image
            }}
            onClose={() => setSelectedTeam(null)}
          />
        )}

        {/* 3) 선택된 팀이 없을 때만 리스트 보여주기 */}
        {!selectedTeam && (
          <div style={{ padding: '16px', paddingBottom: '80px' }}>
            {/* 필터 버튼이나 검색창이 필요하면 여기에 추가 */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                🔍
              </button>
            </div>

            {teamList.map(team => (
              <MainTeamCard
                key={team.id}
                team={{
                  ...team,
                  image: imageMap[team.image] || team.image
                }}
                onClick={() => setSelectedTeam(team)}
              />
            ))}

            {teamList.length === 0 && (
              <div style={{ textAlign: 'center', marginTop: '40px', color: '#666' }}>
                아직 등록된 팀이 없어요.
              </div>
            )}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
