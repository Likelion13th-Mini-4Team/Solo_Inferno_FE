import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  const [emailCode, setEmailCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [popup, setPopup] = useState('');

  // 회원가입 요청
  const handleSignup = async () => {
    if (!id || !password || !confirmPw || !name || !nickname || !studentId || !department || !gender || !birthYear || !email) {
      setPopup('모든 필드를 입력해주세요.');
      return;
    }
    if (password !== confirmPw) {
      setPopup('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!isVerified) {
      setPopup('이메일 인증을 완료해주세요.');
      return;
    }

    try {
        const response = await axios.post(
        'http://3.34.1.245:8080/api/auth/signup',
        {
            userId: id,
            password1: password,
            password2: confirmPw,
            name,
            nickname,
            studentId: parseInt(studentId),
            major: department,
            gender,
            birthYear: parseInt(birthYear),
            email
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status === 200 || response.status === 201) {
        setPopup('회원가입이 성공적으로 완료되었습니다.\n이메일 인증 후 로그인해주세요.');
      }
    } catch (error) {
      console.error('회원가입 오류:', error);
      console.log('서버 응답 내용:\n' + JSON.stringify(error.response?.data, null, 2));
      setPopup('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 아이디 중복 확인
  const handleCheckId = () => {
    setPopup(id === 'admin' ? '이미 사용 중인 아이디입니다.' : '사용 가능한 아이디입니다.');
  };

  // 인증코드 요청
  const handleSendEmail = async () => {
    if (!email.includes('@hufs.ac.kr')) {
      setPopup('유효한 학교 이메일을 입력해주세요. (예: xxx@hufs.ac.kr)');
      return;
    }
    try {
      await axios.post('http://3.34.1.245:8080/api/auth/send-code', {
        email: email
      });
      setPopup('학교 이메일로 인증 링크를 보냈습니다.\n확인 후 인증을 완료해주세요.');
    } catch (err) {
      setPopup('이메일 인증 요청에 실패했습니다.');
      console.error(err);
    }
  };

  // 인증코드 확인
  const handleVerifyCode = async () => {
    if (!email || !emailCode) {
      setPopup('이메일과 인증코드를 모두 입력해주세요.');
      return;
    }
    try {
      await axios.post('http://3.34.1.245:8080/api/auth/verify-code', {
        email: email.trim(),
        code: emailCode.trim()
      });
      setPopup('✅ 인증이 완료되었습니다.');
      setIsVerified(true);
    } catch (err) {
      setPopup('❌ 인증에 실패했습니다. 인증코드를 다시 확인해주세요.');
      console.error(err);
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
            <SmallButton1 type="button" onClick={handleCheckId}>중복확인</SmallButton1>
          </IdRow>
        </LabeledRow>

        <InputField label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
        <InputField label="비밀번호 확인" type="password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} placeholder="비밀번호를 다시 한 번 입력해주세요." />
        <InputField label="이름" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름을 입력해주세요." />
        <InputField label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="사용하실 닉네임을 입력해주세요." />
        <InputField label="학번" value={studentId} onChange={(e) => setStudentId(e.target.value)} placeholder="학번을 입력해주세요. ex) 202302498" />
        <SelectField
          label="학과"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={[
            "AI데이터융합학부", "GBT학부", "Finance & AI융합학부", "그리스·불가리아학과",
            "글로벌스포츠산업학부", "국제금융학과", "기후변화융합학부", "디지털콘텐츠학부",
            "루마니아학과", "반도체공학전공", "바이오메디컬공학부", "산업경영공학과",
            "사학과", "생명공학과", "세르비아·크로아티아학과", "수학과", "언어인지과학과",
            "우크라이나학과", "융합인재학부", "전자공학전공", "전자물리학과", "정보통신공학과",
            "중앙아시아학과", "철학과", "체코·슬로바키아학과", "통계학과", "투어리즘 & 웰니스학부",
            "폴란드학과", "한국학과", "헝가리학과", "화학과", "컴퓨터공학부", "자유전공학부"
          ]}
        />
        <GenderSelect gender={gender} onSelect={setGender} />
        <InputField label="출생년도" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} placeholder="출생년도를 입력해주세요. ex) 2004" />
        <EmailVerify email={email} onChange={(e) => setEmail(e.target.value)} onVerify={handleSendEmail} />
        <VerifyBox>
          <InputField
            label="인증코드"
            value={emailCode}
            onChange={(e) => setEmailCode(e.target.value)}
            placeholder="인증 코드를 입력해주세요."
          />
          <SmallButton2 type="button" onClick={handleVerifyCode}>인증 확인</SmallButton2>
        </VerifyBox>

        <SubmitButton type="button" onClick={handleSignup}>완료</SubmitButton>
      </FormBox>

      {popup && <Popup message={popup} onClose={() => setPopup('')} />}
    </Wrapper>
  );
};

export default SignupForm;

// 스타일
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
  margin: 0;
`;

const InputOnly = styled.input`
  width: calc(100% - 88px);
  padding: 10px 14px;
  border: 1px solid #aab3ff;
  border-radius: 10px;
  font-size: 14px;
`;

const SmallButton1 = styled.button`
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

const SmallButton2 = styled.button`
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
  margin-top: 22px;
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

const VerifyBox = styled.div`
  width: 320px;
  display: flex;
  gap: 10px;

`;
