import BackGround from 'components/result/Background';
import ResultMissionList from 'components/result/ResultMissionList';
import { client } from 'cores/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Result() {
  const [headerInfo, setHeaderInfo] = useState({
    date: '',
    nickname: '',
  });
  const [missions, setMissions] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    getUserMissionInfo();
  }, []);

  const getUserMissionInfo = async () => {
    const result = await client.get(`/mission/${user}/confirmed`);

    let now = new Date();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    setHeaderInfo({
      date: `${month}월 ${day}일`,
      nickname: result.data.data.user.nickname,
    });

    setMissions(result.data.data.missions);
  };

  return (
    <StyledRoot>
      <BackGround />
      <ResultMissionList headerInfo={headerInfo} missions={missions} />
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
