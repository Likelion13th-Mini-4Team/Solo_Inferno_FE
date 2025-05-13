import React from 'react';
import styled from 'styled-components';

const EmailVerify = ({ email, onChange, onVerify }) => (
  <FieldWrapper>
    <Label>학교 이메일</Label>
    <Row>
      <Input
        type="email"
        value={email}
        onChange={onChange}
        placeholder="이메일을 입력해주세요."
      />
      <Button onClick={onVerify}>인증</Button>
    </Row>
  </FieldWrapper>
);

export default EmailVerify;

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

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #aab3ff;
  border-radius: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 14px;
  background-color: #aab3ff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
`;
