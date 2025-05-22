// src/components/Signup/InputField.jsx
import React from 'react';
import styled from 'styled-components';

const InputField = ({ label, value, onChange, type = 'text', placeholder }) => (
  <FieldWrapper>
    <Label>{label}</Label>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </FieldWrapper>
);

export default InputField;

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

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #aab3ff;
  border-radius: 10px;
  font-size: 14px;
`;