import goBtn from 'assets/goBtn.png';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34.6rem;
  margin-left: 1.6rem;
`;

const ListText = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 600;
  height: 14px;
  line-height: 14px;
  margin-top: 7px;
`;

const GoBtn = styled.button`
  border: none;
  background-color: transparent;
  background-size: contain;
  width: 7.4rem;
  height: 2.44rem;
  background-image: ${(props) => `url(${props.url})`};
  padding: 0;
  margin-left: 2.1rem;
`;

const ListTitle = styled.div`
  color: black;
`;

const ResultMissionList = () => {
  return (
    <>
      <ListContainer>
        <ListTitle />
        <ListText>매운음식 하나 먹고 눈물셀카 찍어 보내기</ListText>
        <GoBtn url={goBtn} />
      </ListContainer>
    </>
  );
};

export default ResultMissionList;
