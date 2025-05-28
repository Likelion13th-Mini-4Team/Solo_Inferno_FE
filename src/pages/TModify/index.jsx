import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './TModifyPage.css';

function TModifyPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // location.state가 null일 수 있으므로 방어적으로 처리
  const team = location.state?.team || {
    id: null,
    name: '',
    description: '',
    quote: ''
  };

  // team이 null일 경우도 대비한 기본값
  const [name, setName] = useState(team.name);
  const [description, setDescription] = useState(team.description);
  const [slogan, setSlogan] = useState(team.quote);

  // team이 아예 없으면 잘못된 접근 처리
  if (!location.state?.team) {
    return <div style={{ padding: '20px' }}>잘못된 접근입니다. <br /> 팀 정보를 전달받지 못했습니다.</div>;
  }

  const handleUpdate = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      await axios.put(
        `http://3.34.1.245:8080/api/teams/${team.id}/update`,
        { name, description, slogan },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('팀 정보가 성공적으로 수정되었습니다.');
      navigate('/manage');
    } catch (err) {
      console.error('수정 실패:', err);
      alert(err.response?.data?.message || '팀 수정에 실패했습니다.');
    }
  };

  return (
    <div className="modify-wrapper">
      <Header />
      <main className="modify-container">
        <h2 className="page-title">팀 정보 수정</h2>
        <div className="modify-card">
          <div className="top-row">
            <span className="text-bold">수정 중인 팀</span>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label>팀 이름</label><br />
            <input
              className="text-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <label>한 줄 소개</label><br />
            <input
              className="text-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>팀 슬로건</label><br />
            <input
              className="text-input"
              type="text"
              value={slogan}
              onChange={(e) => setSlogan(e.target.value)}
            />
          </div>
        </div>

        <button className="submit-btn" onClick={handleUpdate}>
          수정 완료
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default TModifyPage;
