// src/pages/Main/index.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MainTeamCard from '../../components/Main/MainTeamCard';
import MainDetailModal from '../../components/Main/MainDetailModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MainPage = () => {
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

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

  const handleTeamClick = (teamId) => {
    setModalLoading(true);
    axios.get(`http://3.34.1.245:8080/api/teams/${teamId}`)
      .then((res) => {
        const data = res.data;
        setSelectedTeam({
          name: data.teamName,
          image: data.emoji,
          팀소개: data['팀 소개'],
          members: data.members.map(member => ({
            닉네임: member.이름, // 이름 → 닉네임 변경
            학번: member.학번,
            학과: member.학과
          }))
        });
      })
      .catch((err) => {
        console.error('팀 상세정보 불러오기 실패', err);
        alert('팀 정보를 불러오는 데 실패했습니다.');
      })
      .finally(() => {
        setModalLoading(false);
      });
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>팀 목록을 불러오는 중...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '390px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <Header />

        {selectedTeam && (
          <MainDetailModal
            team={selectedTeam}
            onClose={() => setSelectedTeam(null)}
          />
        )}

        {!selectedTeam && (
          <div style={{ padding: '16px', paddingBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>🔍</button>
            </div>

            {teamList.map(team => (
              <MainTeamCard
                key={team.id}
                team={team}
                onClick={() => handleTeamClick(team.id)}
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
