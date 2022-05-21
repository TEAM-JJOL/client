import startBtn from 'assets/btn_start.svg';
import charactor from 'assets/monster.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/logo.svg';

const LogoIcon = styled.img`
  margin-bottom: 2.5rem;
`;

const StartBtn = styled.button`
  background-image: ${(props) => `url(${props.url})`};
  background-color: transparent;
  background-size: cover;
  width: 16.9rem;
  height: 6.4rem;
  border: none;
  margin-top: 6.9rem;
`;

const SurviceDsc = styled.h1`
  color: black;
  font-size: 14px;
  text-align: center;
`;

const IntroImg = styled.img`
  width: 28.6rem;
  height: 20.6rem;
  /* margin-left: 7.5rem; */
  margin-top: 3.8rem;
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
  justify-content: center;
  height: 100%;
`;

function Intro() {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <LogoIcon src={logo} />
      <SurviceDsc>친구야 내일 하루 이거 함 해봐 ㅋ 쫄?!</SurviceDsc>
      <IntroImg src={charactor} />
      <StartBtn onClick={() => navigate('login')} url={startBtn} />
    </StyledRoot>
  );
}

export default Intro;
