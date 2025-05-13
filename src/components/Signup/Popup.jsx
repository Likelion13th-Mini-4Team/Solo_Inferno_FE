import React from 'react';
import styled from 'styled-components';

const Popup = ({ message, onClose }) => (
  <Overlay>
    <PopupBox>
      <Message>{message}</Message>
      <CloseButton onClick={onClose}>확인</CloseButton>
    </PopupBox>
  </Overlay>
);

export default Popup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupBox = styled.div`
  background-color: #e4e7ff;
  padding: 24px;
  border-radius: 12px;
  text-align: center;
  width: 280px;
`;

const Message = styled.p`
  font-weight: bold;
  margin-bottom: 16px;
  white-space: pre-line;
`;

const CloseButton = styled.button`
  padding: 8px 20px;
  background-color: #a597f2;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;
