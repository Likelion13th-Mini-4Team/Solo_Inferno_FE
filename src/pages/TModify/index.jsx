// src/pages/TModify/index.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './TModifyPage.css';

function TModifyPage() {
  const [modalType, setModalType] = useState(null);
  const [memberCount, setMemberCount] = useState(2);
  const [inputValue, setInputValue] = useState('');
  const [members, setMembers] = useState([
    { name: '차라투스트라', age: 28, major: '산업경영공학과' },
    { name: '김두한', age: 26, major: '정보통신공학과' },
  ]);

  const navigate = useNavigate();

  const handleInviteClick = () => {
    if (memberCount >= 3) {
      setModalType('limit');
    } else {
      setModalType('invite');
    }
  };

  const handleSubmit = () => {
    navigate('/manage');
  };

  const handleDelete = () => {
    setModalType('deleteConfirm');
  };

  const handleDeleteConfirm = () => {
    setModalType('deleteDone');
  };

  const handleInviteMember = () => {
    const validMembers = ['펭수', '홍길동'];
    if (!validMembers.includes(inputValue)) {
      setModalType('notExist');
    } else {
      const newMember = {
        name: inputValue,
        age: 21,
        major: '컴퓨터공학과'
      };
      setMembers([...members, newMember]);
      setMemberCount(memberCount + 1);
      setModalType('complete');
    }
    setInputValue('');
  };

  return (
    <div className="modify-wrapper">
      <Header />

      <main className="modify-container">
        <div className="top-row" style={{ justifyContent: 'flex-end' }}>
          <button className="delete-btn" onClick={handleDelete}>팀 삭제하기</button>
        </div>

        <div className="modify-card">
          <p><strong>팀명 :</strong> <span className="text-bold">솔로지옥 시즌 1</span></p>
          <p><strong>팀 소개 :</strong> 저희는 이게 매력적 입니다~!</p>
          <p><strong>팀 한마디 :</strong> 진짜 재밌다 ㅋ</p>

          <table className="member-table">
            <thead>
              <tr>
                <th>닉네임</th>
                <th>나이</th>
                <th>학과</th>
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr key={i}>
                  <td>{m.name}</td>
                  <td>{m.age}</td>
                  <td>{m.major}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="invite-btn" onClick={handleInviteClick}>+ 멤버 초대하기</button>
          <div style={{ marginTop: '32px' }}>
            <button className="submit-btn" onClick={handleSubmit}>수정완료</button>
          </div>
        </div>
      </main>

      <Footer />

      {modalType && (
        <div className="modal-backdrop" onClick={() => setModalType(null)}>
          <div className="modal-box small" onClick={(e) => e.stopPropagation()}>
            {modalType === 'limit' && (
              <>
                <p className="modal-message">이미 인원이 다 찼습니다!</p>
                <button className="modal-button" onClick={() => setModalType(null)}>확인</button>
              </>
            )}
            {modalType === 'invite' && (
              <>
                <p className="modal-message">멤버 초대하기</p>
                <input
                  className="invite-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="닉네임을 입력하세요"
                />
                <button className="modal-button" onClick={handleInviteMember}>초대</button>
              </>
            )}
            {modalType === 'notExist' && (
              <>
                <p className="modal-message">존재하지 않는 멤버입니다.</p>
                <button className="modal-button" onClick={() => setModalType(null)}>확인</button>
              </>
            )}
            {modalType === 'complete' && (
              <>
                <p className="modal-message">멤버 초대요청을 완료했습니다.</p>
                <button className="modal-button" onClick={() => setModalType(null)}>확인</button>
              </>
            )}
            {modalType === 'deleteConfirm' && (
              <>
                <p className="modal-message">정말 팀을 삭제하시겠습니까?</p>
                <div className="modal-button-group">
                  <button className="modal-button" onClick={() => setModalType(null)}>취소</button>
                  <button className="modal-button red" onClick={handleDeleteConfirm}>삭제</button>
                </div>
              </>
            )}
            {modalType === 'deleteDone' && (
              <>
                <p className="modal-message">솔로지옥 시즌 1이 삭제되었습니다.</p>
                <button
                  className="modal-button"
                  onClick={() => {
                    setModalType(null);
                    navigate('/manage', { state: { deletedTeamId: 1 } }); // ✅ 삭제 ID 전달
                  }}
                >
                  확인
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TModifyPage;
