import { ReactComponent as checkBtn } from 'assets/ic_checkbtn.svg';
import logoGray from 'assets/ic_logoGray.svg';
import logoGreen from 'assets/ic_logoGreen.svg';
import React, { useState } from 'react';
import styled from 'styled-components';

function ListItem({ content }) {
  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => setIsClicked(!isClicked);

  return (
    <StyledRoot onClick={toggle} isClicked={isClicked}>
      <StyledWrapper>
        <img src={isClicked ? logoGreen : logoGray} width="35px" height="22px" />
        <span>{content}</span>
      </StyledWrapper>
      <StyledCheckBtn isClicked={isClicked} />
    </StyledRoot>
  );
}

export default ListItem;

const StyledRoot = styled.div`
  display: flex;
  align-items: center;
  color: ${({ isClicked }) => (isClicked ? '#000000' : '#a3a3a3')};
  width: 31.7rem;
  justify-content: space-between;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  & > span {
    font-size: 1.4rem;
    line-height: 1.7rem;
    font-weight: 400;
  }
`;

const StyledCheckBtn = styled(checkBtn)`
  & circle {
    fill: ${({ isClicked }) => isClicked && '#69d743'};
  }
  & path {
    stroke: ${({ isClicked }) => isClicked && '#ffffff'};
    stroke-opacity: ${({ isClicked }) => isClicked && '1'};
  }
`;
