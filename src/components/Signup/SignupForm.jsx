import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import SelectField from './SelectField';
import GenderSelect from './GenderSelect';
import EmailVerify from './EmailVerify';
import Popup from './Popup';

const SignupForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [studentId, setStudentId] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [department, setDepartment] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [popup, setPopup] = useState('');

  const handleCheckId = () => {
    if (id === 'admin') {
      setPopup('이미 사용 중인 아이디입니다.');
    } else {
      setPopup('사용 가능한 아이디입니다.');
    }
  };

  const handleVerifyEmail = () => {
    if (!email.includes('@hufs.ac.kr')) {
      setPopup('유효한 학교 이메일을 입력해주세요.\n(예: xxx@hufs.ac.kr)');
    } else {
      setPopup('학교 이메일로 인증 링크를 보냈습니다.\n확인 후 인증을 완료해주세요.');
    }
  };

  return (
    <Wrapper>
      <Logo src={require('../../images/logo.jpg')} alt="logo" />

      <FormBox>
        <LabeledRow>
          <Label>아이디</Label>
          <IdRow>
            <InputOnly
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력해주세요."
            />
            <SmallButton type="button" onClick={handleCheckId}>중복확인</SmallButton>
          </IdRow>
        </LabeledRow>

        <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
        <InputField label="비밀번호 확인" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} placeholder="비밀번호를 다시 한 번 입력해주세요." />
        <InputField label="이름" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요." />
        <InputField label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="사용하실 닉네임을 입력해주세요." />
        <InputField label="학번" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="학번을 입력해주세요. ex) 202302498" />
        <SelectField label="학과" value={department} onChange={(e) => setDepartment(e.target.value)} options={
          [
            "AI데이터융합학부",
            "GBT학부",
            "Finance & AI융합학부",
            "그리스·불가리아학과",
            "글로벌스포츠산업학부",
            "국제금융학과",
            "기후변화융합학부",
            "디지털콘텐츠학부",
            "루마니아학과",
            "반도체공학전공",
            "바이오메디컬공학부",
            "산업경영공학과",
            "사학과",
            "생명공학과",
            "세르비아·크로아티아학과",
            "수학과",
            "언어인지과학과",
            "우크라이나학과",
            "융합인재학부",
            "전자공학전공",
            "전자물리학과",
            "정보통신공학과",
            "중앙아시아학과",
            "철학과",
            "체코·슬로바키아학과",
            "통계학과",
            "투어리즘 & 웰니스학부",
            "폴란드학과",
            "한국학과",
            "헝가리학과",
            "화학과",
            "컴퓨터공학부",
            "자유전공학부",
          ]

        }
         />
        <GenderSelect gender={gender} onSelect={setGender} />
        <InputField label="출생년도" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} placeholder="출생년도를 입력해주세요. ex) 2004" />
        <EmailVerify email={email} onChange={(e) => setEmail(e.target.value)} onVerify={handleVerifyEmail} />
        <SubmitButton>완료</SubmitButton>
      </FormBox>

      {popup && <Popup message={popup} onClose={() => setPopup('')} />}
    </Wrapper>
  );
};

export default SignupForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: white;
`;

const Logo = styled.img`
  width: 160px;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 360px;
  gap: 10px;
`;

const LabeledRow = styled.div`
  width: 320px;
  margin: 0 auto 16px;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 6px;
`;

const IdRow = styled.div`
  display: flex;
  width: 320px;
  gap: 8px;
  margin: 0
`;

const InputOnly = styled.input`
  width: calc(100% - 88px);
  padding: 10px 14px;
  border: 1px solid #aab3ff;
  border-radius: 10px;
  font-size: 14px;
`;

const SmallButton = styled.button`
  width: 80px;
  padding: 10px 14px;
  background-color: #aab3ff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  height: 40px;
`;

const SubmitButton = styled.button`
  margin-top: 24px;
  width: 90%;
  padding: 12px;
  background-color: #d6dbff;
  color: #333;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
