import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      {/* 아이콘 나중에 넣겠음 */}
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(208, 204, 251, 0.48); /* #D0CCFB 48% */
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
`;
