import goshim from 'assets/goshim.png';
import MainGo from 'assets/mainGoBtn.png';
import ResultMissionList from 'components/result/ResultMissionList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const LogoIcon = styled.img`
  margin-top: 14.7rem;
  /* margin-left: 10.2rem; */
  margin-bottom: 2.5rem;
`;

const StartBtn = styled.button`
  background-image: ${(props) => `url(${props.url})`};
  background-color: transparent;
  background-size: contain;
  width: 17.2rem;
  height: 6.8rem;
  border: none;
  margin-top: 6.9rem;
  /* margin-left: 10.9rem; */
`;

const SurviceDsc = styled.h1`
  color: black;
  font-size: 14px;
  text-align: center;
`;

const IntroImg = styled.img`
  width: 22.5rem;
  height: 22.5rem;
  /* margin-left: 7.5rem; */
  margin-top: 2rem;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const ShareBtn = styled.div`
  color: #777777;
  font-size: 13px;
  margin-right: 1.7rem;
  border-bottom: solid 0.5px rgba(119, 119, 119, 0.5);
`;

const CreateBtn = styled.div`
  color: #777777;
  font-size: 13px;
  border-bottom: solid 0.5px rgba(119, 119, 119, 0.5);
`;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Intro() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <LogoIcon src={logo} />
      <SurviceDsc>친구야 내일 하루 이거 함 해봐 ㅋ 쫄?!</SurviceDsc>
      <IntroImg src={goshim} />
      <StartBtn onClick={() => navigate('Login')} url={MainGo} />
      <FooterContainer>
        <ShareBtn>링크 공유하기</ShareBtn>
        <CreateBtn>나도 쫄 링크 만들기</CreateBtn>
      </FooterContainer>
    </StyledRoot>
  );
}

export default Intro;
