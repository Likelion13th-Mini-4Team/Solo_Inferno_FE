import React from 'react';
import styled from 'styled-components';

const SelectField = ({ label, value, onChange, options }) => (
  <FieldWrapper>
    <Label>{label}</Label>
    <Select value={value} onChange={onChange}>
      <option value="">{label}을(를) 선택해주세요.</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  </FieldWrapper>
);

export default SelectField;

const FieldWrapper = styled.div`
  width: 320px;
  margin-bottom: 16px;
  
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #aab3ff;
  border-radius: 10px;
  font-size: 14px;
  color: #666;
`;
