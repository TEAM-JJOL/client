import Ga from 'assets/가.png';
import Go from 'assets/고.png';
import Bo from 'assets/보.png';
import Ja from 'assets/자.png';
import styled from 'styled-components';

const BgIcon = styled.img`
  position: absolute;
  width: 12.9rem;
  height: 11.3rem;
`;

const StyledRoot = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BackGround = () => {
  return (
    <StyledRoot>
      <BgIcon src={Ga} />
      <BgIcon src={Bo} style={{ right: '0' }} />
      <BgIcon src={Ja} style={{ bottom: '0' }} />
      <BgIcon src={Go} style={{ bottom: '0', right: '0' }} />
    </StyledRoot>
  );
};

export default BackGround;
