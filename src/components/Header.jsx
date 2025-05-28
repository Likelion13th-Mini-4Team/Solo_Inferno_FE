import React from 'react';
import styled from 'styled-components';
import { BsChatSquareHeart } from 'react-icons/bs';
import { IoChevronBack } from 'react-icons/io5'; // ← 뒤로가기 아이콘
import Header_logo from '../images/Header/Header_logo.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header({ messageCount = 2 }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Left onClick={() => navigate(-1)}>
        <IoChevronBack size={24} />
      </Left>

      <Centered>
        <Link to="/main">
          <Logo src={Header_logo} alt="Tingle 로고" />
        </Link>
      </Centered>

      <Right as={Link} to="/match">
        <BsChatSquareHeart size={24} />
        <MessageCount>+{messageCount}</MessageCount>
      </Right>
    </HeaderContainer>
  );
}

export default Header;


const HeaderContainer = styled.header`
  width: 390px;          
  margin: 0 auto;
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Centered = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  height: 75px;
`;

const Right = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: bold;
  color: #000;              
  text-decoration: none;     
  cursor: pointer;          

  &:hover {
    opacity: 0.7;            
  }
`;


const MessageCount = styled.span`
  color: #000;
`;

const Left = styled.div`
  position: absolute;
  left: 20px;
  top: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #7F57FA;

  svg {
    width: 35px;
    height: 35px;
  }


  &:hover {
    opacity: 0.7;
  }
`;
