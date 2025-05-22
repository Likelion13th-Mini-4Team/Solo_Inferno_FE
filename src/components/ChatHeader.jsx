import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header_logo from '../images/Header/Header_logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { BeforeIcon, MenuIcon } from '../images/Header/icons';
import OutModal from '../components/Chat/OutModal';
import MemberModal from '../components/Chat/MemberModal';


export default function ChatHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState('none');  
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  const menuRef = useRef(null);
  const modalRef = useRef(null);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutClick = () => {
    setActiveModal('out');
    setMenuOpen(false);
  };

  const handleMemberClick = () => {
    setActiveModal('member');
    setMenuOpen(false);
  };

  const handleConfirmOut = () => {
    setActiveModal('none');
    console.log('채팅방 나가기 처리');
  };

  const handleCancelOut = () => {
    setActiveModal('none');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;

      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !event.target.closest('.menu-icon')
      ) {
        setMenuOpen(false);
      }

      if (
        activeModal !== 'none' &&
        modalRef.current &&
        !modalRef.current.contains(target)
      ) {
        setActiveModal('none');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, activeModal]);

  return (
    <HeaderContainer>
      <LeftIcon onClick={handleGoBack}>
        <BeforeIcon />
      </LeftIcon>

      <LogoWrapper>
        <Link to="/main">
        <Logo src={Header_logo} alt="Tingle 로고" />
        </Link>
      </LogoWrapper>

      <RightIcon>
        <div className="menu-icon" onClick={handleMenuClick}>
          <MenuIcon />
        </div>
        {menuOpen && (
          <DropdownMenu ref={menuRef}>
            <MenuItem onClick={handleMemberClick}>상대 팀 목록보기</MenuItem>
            <MenuItem onClick={handleOutClick}>채팅방 나가기</MenuItem>
          </DropdownMenu>
        )}
      </RightIcon>

      {activeModal === 'out' && (
        <CenteredModalOverlay>
          <ModalBox ref={modalRef}>
            <OutModal
              onConfirm={handleConfirmOut}
              onCancel={handleCancelOut}
            />
          </ModalBox>
        </CenteredModalOverlay>
      )}

      {activeModal === 'member' && (
        <TopRightModalOverlay>
          <MemberModalBox ref={modalRef}>
            <MemberModal />
          </MemberModalBox>
        </TopRightModalOverlay>
      )}
    </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  width: 390px;
  height: 80px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftIcon = styled.div`
  position: absolute;
  left: 16px;
`;

const RightIcon = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Logo = styled.img`
  height: 75px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 170px;
  background: #e3e0ff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #a39bf0;
  z-index: 99;
  text-align: center;
`;

const MenuItem = styled.div`
  padding: 12px 20px;
  font-size: 17px;
  font-weight: 500;
  color: #160099;
  border-top: 0.3px solid #9a7aff;

  &:first-child {
    border-top: none;
  }

  &:hover {
    background-color: #d4d0ff;
    border-radius: 12px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const CenteredModalOverlay = styled(ModalOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopRightModalOverlay = styled.div`
  position: absolute;
  margin-top: 170px;         
  margin-left: 170px;       
  z-index: 1000;
`;


const ModalBox = styled.div`
  background: #e4e6fd;
  border: 1px solid #a39bf0;
  padding: 24px;
  border-radius: 12px;
  width: 334px;
  max-width: 90%;
`;

const MemberModalBox = styled(ModalBox)`
  width: 260px;
  padding: 20px;
`;
