import BackGround from 'components/result/Background';
import ResultMissionList from 'components/result/ResultMissionList';
import React from 'react';
import styled from 'styled-components';

function Result() {
  return (
    <StyledRoot>
      <BackGround />
      <ResultMissionList />
    </StyledRoot>
  );
}

export default Result;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100%;
`;
