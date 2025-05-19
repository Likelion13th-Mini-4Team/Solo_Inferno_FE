import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const members = [
  { name: '배주원', major: '정보통신공학과' },
  { name: '하예준', major: '컴퓨터공학과' },
  { name: '남하원', major: '컴퓨터공학과' },
];

export default function MemberModal() {
  return (
    <>
      {members.map((member, index) => (
        <MemberRow key={index}>
          <FaUser size={22} />
          <MemberName>{member.name}</MemberName>
          <MemberMajor>{member.major}</MemberMajor>
        </MemberRow>
      ))}
    </>
  );
}

const MemberRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 12px;
  }
`;

const MemberName = styled.div`
  font-weight: bold;
  margin-right: auto;
  font-size: 16px;
`;

const MemberMajor = styled.div`
  font-size: 16px;
`;
