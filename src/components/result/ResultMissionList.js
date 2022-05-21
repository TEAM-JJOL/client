import goBtn from 'assets/goBtn.png';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.6rem;
  margin-top: 15rem;
`;

const ListTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  max-height: 25rem;
  overflow: scroll;
`;

const ListText = styled.li`
  list-style: none;
  color: black;
  font-size: 14px;
  font-weight: 600;
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
  font-weight: 700;
  font-size: 32px;
`;

const StyledRoot = styled.div`
  height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  margin-bottom: 19.64px;
`;

const ResultMissionList = ({ headerInfo, missions }) => {
  return (
    <StyledRoot>
      <ListContainer>
        <ListTitle>
          {headerInfo.date} <br /> {headerInfo.nickname}, <br /> 함 가보자고!
        </ListTitle>
        <ListTextContainer>
          {missions.map((mission) => (
            <Contents key={mission._id}>
              <ListText>{mission.content}</ListText>
              <GoBtn url={goBtn} />
            </Contents>
          ))}
        </ListTextContainer>
      </ListContainer>
    </StyledRoot>
  );
};

export default ResultMissionList;
