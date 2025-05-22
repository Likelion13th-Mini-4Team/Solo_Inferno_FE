import React from 'react';
import styled from 'styled-components';

export default function OutModal({ onConfirm, onCancel }) {
  return (
    <Wrapper>
      <Message>정말 채팅방을 나가시겠습니까?</Message>
      <ButtonRow>
        <ModalButton onClick={onCancel} borderColor="#210085" textColor="#333738">
          취소
        </ModalButton>
        <ModalButton onClick={onConfirm} borderColor="#6161FF" textColor="#6636F8">
          나가기
        </ModalButton>
      </ButtonRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
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
  margin-top: 24px;
`;

const ModalButton = styled.button`
  padding: 8px 24px;
  font-size: 13px;
  font-weight: bold;
  border: 1px solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  background: #D7DBFD;
  border-radius: 10px;
  cursor: pointer;
`;
