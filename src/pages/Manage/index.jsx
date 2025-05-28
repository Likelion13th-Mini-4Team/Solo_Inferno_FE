// src/pages/Manage/index.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagePage.css';
import EmptyTeamMessage from '../../components/Manage/EmptyTeamMessage';
import TeamManageForm from '../../components/Manage/TeamManageForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ManagePage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.get('http://3.34.1.245:8080/api/teams', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setTeams(res.data.teams || []);
      })
      .catch((err) => {
        console.error('팀 목록 불러오기 실패:', err);
        setError('팀 목록을 불러오는 데 실패했습니다.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="manage-container">불러오는 중...</div>;
  if (error) return <div className="manage-container">{error}</div>;

  return (
    <div className="manage-wrapper">
      <Header />
      <main className="manage-container">
        <div className="edit-wrapper">
          <button className="edit-btn">팀 수정하기</button>
        </div>
        {teams.length === 0 ? (
          <EmptyTeamMessage />
        ) : (
          teams.map((team) => (
            <TeamManageForm key={team.id} team={team} />
          ))
        )}
        <button className="create-btn">팀 생성하기</button>
      </main>
      <Footer />
    </div>
  );
}

export default ManagePage;
