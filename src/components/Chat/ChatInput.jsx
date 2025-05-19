import React from 'react';
import styled from 'styled-components';
import { SendIcon } from '../../images/Chat/icons';

export default function ChatInput({ input, setInput, handleSend }) {
    return (
      <InputArea>
        <Input
          placeholder="채팅 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              handleSend();
            }
          }}
        />
        <SendBtn onClick={handleSend}>
          <SendIcon />
        </SendBtn>
      </InputArea>
    );
  }

const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: #E9E7FD;
  border-radius: 0 0 0px 0px;
`;

const Input = styled.input`
  flex: 1;
  background: rgba(185, 192, 255, 0.23); 
  border: none;
  border-radius: 20px;
  font-weight: bold;
  padding: 15px;
  font-size: 14px;
  color: #444;
  outline: none;
`;

const SendBtn = styled.button`
  background: rgba(185, 192, 255, 0.23); 
  border: none;
  border-radius: 12px;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: #444;
  }
`;
