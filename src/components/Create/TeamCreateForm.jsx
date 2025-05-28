import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './TeamCreateForm.css';

function TeamCreateForm() {
  const navigate = useNavigate();

  const [teamName, setTeamName] = useState('');
  const [teamDesc, setTeamDesc] = useState('');
  const [teamQuote, setTeamQuote] = useState('');
  const [members, setMembers] = useState(['이유준']);
  const [inviteId, setInviteId] = useState('');

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const nicknameToId = {
    이유준: 1,
    하예준: 2,
    남하원: 3,
    펭수: 4,
    홍길동: 5,
  };

  const handleInvite = () => {
    if (!inviteId) return;

    const validMembers = Object.keys(nicknameToId);
    if (!validMembers.includes(inviteId)) {
      setIsInviteModalOpen(false);
      setIsErrorModalOpen(true);
      setInviteId('');
      return;
    }

    if (members.includes(inviteId)) {
      setIsInviteModalOpen(false);
      setInviteId('');
      return;
    }

    if (members.length >= 3) {
      setIsInviteModalOpen(false);
      setModalType('limit');
      setInviteId('');
      return;
    }

    setMembers([...members, inviteId]);
    setIsInviteModalOpen(false);
    setIsConfirmModalOpen(true);
    setInviteId('');
  };

  const handleCreate = async () => {
    setIsCreateModalOpen(false);

    const token = localStorage.getItem('accessToken');
    const memberIds = members.map(nick => nicknameToId[nick]).filter(Boolean);

    try {
      const res = await axios.post(
        'http://3.34.1.245:8080/api/teams/create',
        {
          name: teamName,
          description: teamDesc,
          tagline: teamQuote,
          memberIds: memberIds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 201) {
        setIsSuccessModalOpen(true);
      }
    } catch (err) {
      console.error('팀 생성 실패:', err);
      alert(err.response?.data?.message || '팀 생성에 실패했습니다.');
    }
  };

  const handleNavigateToManage = () => {
    navigate('/manage');
  };

  return (
    <div className="create-form">
      {/* 기본 입력 */}
      <div className="form-group">
        <label>팀 이름</label>
        <input
          type="text"
          placeholder="팀 이름을 입력해주세요."
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>팀 소개 (한 줄 소개)</label>
        <input
          type="text"
          placeholder="우리 팀을 한 줄로 소개해보세요!"
          value={teamDesc}
          onChange={(e) => setTeamDesc(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>팀 한마디</label>
        <input
          type="text"
          placeholder="하고 싶은 말 등을 자유롭게 입력하세요!"
          value={teamQuote}
          onChange={(e) => setTeamQuote(e.target.value)}
        />
      </div>

      {/* 멤버 추가 */}
      <div className="form-group">
        <label>멤버 추가 (최대 2명 초대 가능)</label>
        <div className="member-section">
          <div className="member-list">
            {members.map((member, index) => (
              <div className="member-tag" key={index}>{member}</div>
            ))}
          </div>
          <button
            className="invite-btn"
            onClick={() => {
              if (members.length >= 3) {
                setModalType('limit');
              } else {
                setIsInviteModalOpen(true);
              }
            }}
          >
            + 멤버 초대하기
          </button>
        </div>
      </div>

      {/* 생성 버튼 */}
      <div className="form-group">
        <button className="submit-btn" onClick={() => setIsCreateModalOpen(true)}>
          팀 생성하기
        </button>
      </div>

      {/* 모달들 */}
      {isInviteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>멤버 초대하기</h3>
            <div className="modal-input-group">
              <input
                type="text"
                placeholder="닉네임을 입력해주세요."
                value={inviteId}
                onChange={(e) => setInviteId(e.target.value)}
              />
              <button className="invite-confirm-btn" onClick={handleInvite}>
                초대하기
              </button>
            </div>
            <button className="modal-close-btn" onClick={() => setIsInviteModalOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content confirm">
            <p className="confirm-text">멤버 초대요청을 완료했습니다.</p>
            <button className="confirm-btn" onClick={() => setIsConfirmModalOpen(false)}>
              확인
            </button>
          </div>
        </div>
      )}

      {isErrorModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content error">
            <p className="error-text">존재하지 않는 멤버입니다.</p>
            <button className="confirm-btn" onClick={() => setIsErrorModalOpen(false)}>
              확인
            </button>
          </div>
        </div>
      )}

      {modalType === 'limit' && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <p className="modal-message">이미 정원이 꽉 찼습니다!</p>
            <button className="modal-button" onClick={() => setModalType(null)}>
              확인
            </button>
          </div>
        </div>
      )}

      {isCreateModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content create">
            <p className="create-text">팀을 생성하시겠습니까?</p>
            <div className="create-btn-group">
              <button className="create-cancel-btn" onClick={() => setIsCreateModalOpen(false)}>
                취소
              </button>
              <button className="create-confirm-btn" onClick={handleCreate}>
                생성
              </button>
            </div>
          </div>
        </div>
      )}

      {isSuccessModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content success">
            <p className="success-text">팀 생성이 완료되었습니다!</p>
            <button className="confirm-btn" onClick={handleNavigateToManage}>
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamCreateForm;
