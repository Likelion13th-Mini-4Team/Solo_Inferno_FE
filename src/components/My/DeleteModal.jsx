import React from 'react';
import styled from 'styled-components';

export default function LogoutModal({ onConfirm, onCancel }) {
  return (
    <Overlay>
      <ModalBox>
        <Message>회원탈퇴를 하시겠습니까?</Message>
        <ButtonRow>
          <ModalButton onClick={onCancel} borderColor="#210085" textColor="#333738">
            취소
          </ModalButton>
          <ModalButton onClick={onConfirm} borderColor="#6161FF" textColor="#6636F8">
            확인
          </ModalButton>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: #E4E6FD;
  border: 1px solid #A39BF0;
  padding: 24px;
  border-radius: 12px;
  width: 334px;
  height: 160px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Message = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const ModalButton = styled.button`
  padding: 8px 24px;
  font-size: 13px;
  font-weight: bold;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  background-color: #D7DBFD;
`;
