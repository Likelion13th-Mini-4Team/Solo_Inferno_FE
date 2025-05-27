import React from 'react';
import styled from 'styled-components';

const GenderSelect = ({ gender, onSelect }) => (
  <FieldWrapper>
    <Label>성별</Label>
    <GenderWrapper>
      <GenderButton selected={gender === 'MALE'} onClick={() => onSelect('MALE')}>남</GenderButton>
      <GenderButton selected={gender === 'FEMALE'} onClick={() => onSelect('FEMALE')}>여</GenderButton>
    </GenderWrapper>
  </FieldWrapper>
);

export default GenderSelect;

const FieldWrapper = styled.div`
  width: 320px;
  margin-bottom: 16px;
  margin: 0 auto 16px;  
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
`;

const GenderWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const GenderButton = styled.button`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  background-color: ${({ selected }) => (selected ? '#8a95f0' : '#e4e7ff')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  cursor: pointer;
`;
