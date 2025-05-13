import React from 'react';
import styled from 'styled-components';
import { BsChatSquareHeart } from 'react-icons/bs';
import Header_logo from '../images/Header/Header_logo.svg';

function Header({ messageCount = 3 }) {
  return (
    <HeaderContainer>
      <Centered>
        <Logo src={Header_logo} alt="Tingle 로고" />
      </Centered>
      <Right>
        <BsChatSquareHeart size={24} />
        <MessageCount>+{messageCount}</MessageCount>
      </Right>
    </HeaderContainer>
  );
}

export default Header;


const HeaderContainer = styled.header`
  position: relative;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  height: 70px;
`;

const Right = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: bold;
`;

const MessageCount = styled.span`
  color: #000;
`;
