// src/components/Create/TeamCreateForm.jsx

import React from 'react';
import './TeamCreateForm.css';

function TeamCreateForm() {
  return (
    <div className="create-form">
      <div className="form-group">
        <label>팀 이름</label>
        <input type="text" placeholder="팀 이름을 입력해주세요." />
      </div>

      <div className="form-group">
        <label>팀 소개 (한 줄 소개)</label>
        <input type="text" placeholder="우리 팀을 한 줄로 소개해보세요!" />
      </div>

      <div className="form-group">
        <label>팀 한마디</label>
        <textarea placeholder="팀 분위기나 하고 싶은 말 등 자유롭게 입력하세요!" />
      </div>

      <div className="form-group">
        <label>멤버 추가 (최대 3명)</label>
        <div className="member-list">
          <div className="member-tag">이유준</div>
          <div className="member-tag">하예준</div>
          <button className="invite-btn">+ 멤버 초대하기</button>
        </div>
      </div>

      <div className="form-group">
        <label>팀 이모지</label>
        <button className="emoji-btn">팀을 대표할 이미지를 선택해주세요!</button>
      </div>

      <button className="submit-btn">팀 생성하기</button>
    </div>
  );
}

export default TeamCreateForm;
