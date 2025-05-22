import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const members = [
  { name: '솔로지옥1', major: '정보통신공학과' },
  { name: '솔로지옥2', major: '컴퓨터공학과' },
  { name: '솔로지옥3', major: '컴퓨터공학과' },
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
  width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 15px;
  }
`;



const MemberName = styled.div`
  font-weight: bold;
  padding-right: 5px;
  margin-right: 16px;
  font-size: 16px;
`;

const MemberMajor = styled.div`
  font-size: 14px;
`;
