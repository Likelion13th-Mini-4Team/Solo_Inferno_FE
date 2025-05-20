import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamManageForm from '../../components/Manage/TeamManageForm';
import './ManagePage.css';

function ManagePage() {
  const teams = [
    {
      id: 1,
      name: '솔로지옥 시즌 1',
      description: '저희는 이게 매력적 입니다~!',
      quote: '진짜 재밌다 ㅋ'
    },
    {
      id: 2,
      name: '솔로지옥 시즌 2',
      description: '저희는 이게 매력적 입니다~!',
      quote: '진짜 재밌다 ㅋ'
    },
    {
      id: 3,
      name: '솔로지옥 시즌 3',
      description: '저희는 이게 매력적 입니다~!',
      quote: '진짜 재밌다 ㅋ'
    }
  ];

  return (
    <div className="manage-wrapper" style={{ paddingTop: '24px', paddingBottom: '100px' }}>
      <Header />
      <main className="manage-container">
        <div className="edit-wrapper">
          <button className="edit-btn">팀 수정하기</button>
        </div>
        {teams.map((team) => (
          <TeamManageForm key={team.id} team={team} />
        ))}
        <button className="create-btn">팀 생성하기</button>
      </main>
      <Footer />
    </div>
  );
}

export default ManagePage;
