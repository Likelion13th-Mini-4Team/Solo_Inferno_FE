import React from 'react';
import { useNavigate } from 'react-router-dom';

function Example() {
  const navigate = useNavigate();

  // 버튼 이름과 경로를 배열로 관리하겠습니당~~
  const routes = [
    { name: '시작', path: '/start' },
    { name: '로그인', path: '/login' },
    { name: '회원가입', path: '/signup' },
    { name: '생성없음', path: '/zero' },
    { name: '메인', path: '/main' },
    { name: '회원정보 수정', path: '/imodify' },
    { name: '매칭', path: '/match' },
    { name: '팀 관리', path: '/manage' },
    { name: '팀 수정', path: '/tmodify' },
    { name: '팀 생성', path: '/create' },
    { name: '채팅', path: '/chat' },
    { name: '마이', path: '/my' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌟 시작 페이지</h1>
      {routes.map(({ name, path }) => (
        <button
          key={path}
          onClick={() => navigate(path)}
          style={{
            margin: '0.5rem',
            padding: '1rem 2rem',
            fontSize: '16px',
            borderRadius: '8px',
          }}
        >
          {name} 페이지로 이동
        </button>
      ))}
    </div>
  );
}

export default Example;
