import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #F3EEFF;
  border: 2px solid #DCCFFF;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 360px;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 12px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-left: -8px;

  & > label {
    font-size: 14px;
    cursor: pointer;

    input {
      margin-right: 4px;
      accent-color: #7E5EFF;
    }
  }
`;

const RangeWrapper = styled.div`
  position: relative;
  height: 32px;
`;

const RangeInputMin = styled.input`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #7E5EFF;
    border: none;
    cursor: pointer;
    margin-top: -4px;
    position: relative;
    z-index: 3;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: #DCCFFF;
    border-radius: 3px;
  }
`;

const RangeInputMax = styled.input`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 6px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #7E5EFF;
    border: none;
    cursor: pointer;
    margin-top: -4px;
    position: relative;
    z-index: 2;
  }

  &::-webkit-slider-runnable-track {
    height: 6px;
    background: #DCCFFF;
    border-radius: 3px;
  }
`;

const AgeValues = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 4px;
  color: #444;
`;

const ApplyButton = styled.button`
  width: 100%;
  background: #7E5EFF;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const MainFilterModal = ({ onClose, onApply }) => {
  const [gender, setGender] = useState('all');
  const [ageRange, setAgeRange] = useState([20, 30]);

  const handleMinChange = (e) => {
    const val = Math.min(Number(e.target.value), ageRange[1] - 1);
    setAgeRange([val, ageRange[1]]);
  };
  const handleMaxChange = (e) => {
    const val = Math.max(Number(e.target.value), ageRange[0] + 1);
    setAgeRange([ageRange[0], val]);
  };

  const apply = () => {
    onApply({ gender, ageRange });
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <CloseButton onClick={onClose}>×</CloseButton>

        <Section>
          <SectionRow>
            <Label>상대팀 성별</Label>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                남
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                여
              </label>
            </RadioGroup>
          </SectionRow>
        </Section>

        <Section>
          <Label>상대팀 나이</Label>
          <RangeWrapper>
            <RangeInputMin
              type="range"
              min="18"
              max="40"
              value={ageRange[0]}
              onChange={handleMinChange}
            />
            <RangeInputMax
              type="range"
              min="18"
              max="40"
              value={ageRange[1]}
              onChange={handleMaxChange}
            />
          </RangeWrapper>
          <AgeValues>
            <span>{ageRange[0]}</span>
            <span>{ageRange[1]}</span>
          </AgeValues>
        </Section>

        <ApplyButton onClick={apply}>적용하기</ApplyButton>
      </Modal>
    </>
  );
};

export default MainFilterModal;
