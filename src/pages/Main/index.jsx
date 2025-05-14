import React, { useState } from 'react';
import MainTeamCard from '../../components/Main/MainTeamCard';
import MainFilterModal from '../../components/Main/MainFilterModal';
import MainDetailModal from '../../components/Main/MainDetailModal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterIcon from '../../images/icons/filter.png';

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
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamList = [
    { id: 1, name: '우주최강팀', desc: '호날두, 메시, 이건휘 레츠고', image: 'Dog.png' },
    { id: 2, name: '드림팀', desc: '꿈이 많은 아이들입니다.', image: 'Cat.png' },
    { id: 3, name: '토끼팀', desc: '달리기 선출 모임', image: 'Rabbit.png' },
    { id: 4, name: '호랑이팀', desc: '98년생 10년생 레츠고', image: 'Tiger.png' }
  ];

  return (
    <div style={{ backgroundColor: '#f9f9f9' }}>
      <div
        style={{
          maxWidth: '430px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#ffffff'
        }}
      >
        <Header />

        {/* 필터 모달 */}
        {filterOpen && (
          <MainFilterModal
            onClose={() => setFilterOpen(false)}
            onApply={(filters) => {
              console.log('선택된 필터:', filters);
            }}
          />
        )}

        {/* 팀 상세 보기 (모달처럼 보이되 전체 페이지로 대체됨) */}
        {selectedTeam && (
          <MainDetailModal
            team={{ ...selectedTeam, image: imageMap[selectedTeam.image] }}
            onClose={() => setSelectedTeam(null)}
          />
        )}

        {/* 팀 리스트 */}
        {!selectedTeam && (
          <div style={{ padding: '16px', paddingBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' }}>
              <button
                onClick={() => setFilterOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <img src={FilterIcon} alt="필터 아이콘" width={24} height={24} />
              </button>
            </div>

            {teamList.map((team) => (
              <MainTeamCard
                key={team.id}
                team={{ ...team, image: imageMap[team.image] }}
                onClick={() => setSelectedTeam(team)}
              />
            ))}
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
