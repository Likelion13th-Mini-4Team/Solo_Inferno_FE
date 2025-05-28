import React, { useState } from 'react';
import styled from 'styled-components';
import ChatHeader from '../../components/ChatHeader';
import ChatInput from '../../components/Chat/ChatInput';
import { FaUser } from 'react-icons/fa';
import CatImage from '../../images/Chat/cat.svg';

export default function Chat() {
  const [messages, setMessages] = useState([
 
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([
      ...messages,
      { id: Date.now(), sender: '나', text: input, isMine: true,  }
    ]);
    setInput('');
  };

  return (
    <>
      <ChatHeader />
      <Container>
        <TopRow>
          <TopBar>
            <FaUser size={14} />
            <MemberCount>6</MemberCount>
          </TopBar>
          <DateText>2025년 5월 7일 수요일</DateText>
        </TopRow>
        <MessageList>
          {messages.map((msg) => (
            <MessageItem key={msg.id} $mine={msg.isMine}>
              {!msg.isMine && (
                <SenderBlock>
                  <ProfileImg src={CatImage} alt="avatar" />
                  <SenderName>{msg.sender}</SenderName>
                </SenderBlock>
              )}
              <MessageBlock $mine={msg.isMine}>
                <BubbleContainer>
                  {!msg.isMine && <BubbleTailLeft />}
                  <Bubble $mine={msg.isMine}>{msg.text}</Bubble>
                  {msg.isMine && <BubbleTailRight />}
                </BubbleContainer>
                <TimeText>{msg.time}</TimeText>
              </MessageBlock>
            </MessageItem>
          ))}
        </MessageList>
        <ChatInputWrapper>
          <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
        </ChatInputWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px 6px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;

const MemberCount = styled.div`
  font-weight: bold;
`;

const DateText = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin-right: 110px;
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 30px 16px 120px;
`;

const MessageItem = styled.div`
  display: flex;
  flex-direction: ${({ $mine }) => ($mine ? 'row-reverse' : 'row')};
  align-items: flex-start;
  margin-bottom: 20px;
`;

const SenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
`;

const SenderName = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const MessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $mine }) => ($mine ? 'flex-end' : 'flex-start')};
`;

const BubbleContainer = styled.div`
  position: relative;
`;

const Bubble = styled.div`
  background-color: ${({ $mine }) => ($mine ? '#E4E6FD' : '#F0EDFC')};
  padding: 10px 14px;
  border-radius: 16px;
  max-width: 240px;
  font-size: 15px;
  color: #111;
  word-break: break-word;
`;

const BubbleTailLeft = styled.div`
  position: absolute;
  top: 10px;
  left: -6px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #F0EDFC;
`;

const BubbleTailRight = styled.div`
  position: absolute;
  top: 10px;
  right: -6px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #E7E5FB;
`;

const TimeText = styled.div`
  font-size: 11px;
  color: #999;
  margin-top: 4px;
`;

const ChatInputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  background-color: #fff;
  z-index: 10;
`;
