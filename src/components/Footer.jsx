import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { HeartFIcon } from '../images/Footer/icons';
import { TeamFIcon } from '../images/Footer/icons';
import { ChatFIcon } from '../images/Footer/icons';
import { MyFIcon } from '../images/Footer/icons';


function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  const activeColor = '#6636F8';
  const defaultColor = '#6161FF';

  return (
    <FooterContainer>
      <IconWrapper onClick={() => navigate('/match')}>
        <HeartFIcon color={isActive('/match') ? activeColor : defaultColor} />
        <Label style={{ color: isActive('/match') ? activeColor : defaultColor }}>
          매칭하기
        </Label>
      </IconWrapper>

      <IconWrapper onClick={() => navigate('/manage')}>
        <TeamFIcon color={isActive('/manage') ? activeColor : defaultColor} />
        <Label style={{ color: isActive('/manage') ? activeColor : defaultColor }}>
          팀 관리
        </Label>
      </IconWrapper>

      <IconWrapper onClick={() => navigate('/chat')}>
        <ChatFIcon color={isActive('/chat') ? activeColor : defaultColor} />
        <Label style={{ color: isActive('/chat') ? activeColor : defaultColor }}>
          채팅
        </Label>
      </IconWrapper>

      <IconWrapper onClick={() => navigate('/my')}>
        <MyFIcon color={isActive('/my') ? activeColor : defaultColor} />
        <Label style={{ color: isActive('/my') ? activeColor : defaultColor }}>
          내 정보
        </Label>
      </IconWrapper>
    </FooterContainer>
  );
}


export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); 
  width: 390px;                
  height: 75px;
  background-color: rgba(208, 204, 251, 0.48);
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1px;
  z-index: 999;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: #6159E4; 
  margin-top: 11px;
`;

const Label = styled.span`
  font-size: 11px;
  font-weight: bold;
`;
