import gobtn from 'assets/btn_go.svg';
import key from 'assets/icn_key.svg';
import logoGreen from 'assets/logo.svg';
import ListItem from 'components/main/ListItem';
import { client } from 'cores/api';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [pw, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checkedList, setCheckedList] = useState([]);
  const [isCopy, setIsCopy] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const text = window.location.href;
  const userId = location.pathname.split('/')[2];

  const getMissions = async (userId) => {
    const result = await client.get(`/mission/${userId}`);
    const { nickname } = result.data.data.user;
    const { missions } = result.data.data;
    setTodoList([...missions]);
    setName(nickname);
  };

  const postMission = async () => {
    const result = await client.post('/mission', {
      ownerId: userId,
      content: inputValue,
    });
    const { id } = result.data.data;
    setTodoList([...todoList, { _id: id, content: inputValue }]);
  };

  useEffect(() => {
    getMissions(userId);
  }, []);

  const handleSetCheckedList = (value) => {
    setCheckedList([...checkedList, value]);
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setTimeout(() => {
        setIsCopy(false);
      }, 1000);
      setIsCopy(true);
    } catch (error) {
      alert('복사 실패!');
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postMission();
    setInputValue('');
  };

  const handleCheckedList = async () => {
    if (pw === '') {
      alert('비밀번호를 입력해 주세요');
    } else {
      try {
        await client.post('/mission/confirm', {
          _id: userId,
          password: pw,
          missions: checkedList,
        });
        navigate(`/result/${userId}`);
      } catch (err) {
        if (err.response.data.status === 401) {
          alert('비밀번호가 잘못되었습니다.');
        }
      }
    }
  };

  return (
    <StyledRoot>
      {isCopy && (
        <StyledModal>
          <img src={logoGreen} width="76px" height="56px" />
          <span>친구들에게 링크를 공유하세요!</span>
        </StyledModal>
      )}
      <img src="" />
      <StyledTitle>
        <span>{name}</span>
        <span>
          내일 뭐 해! <img src={logoGreen} width="53px" height="38px" />
        </span>
        <p>
          <em>{name}</em>, 오늘 난 너가 이걸 했으면 좋겠어
        </p>
      </StyledTitle>
      <StyledWrapper>
        <StyledUL>
          {todoList.map((el) => (
            <ListItem key={el._id} id={el._id} content={el.content} handleSetCheckedList={handleSetCheckedList} />
          ))}
        </StyledUL>
        <StyledInputWrapper>
          <img src={logoGreen} width="35px" height="22px" />
          <form onSubmit={(e) => handleSubmit(e)}>
            <StyledInput type="text" placeholder="추가로 입력해주세요" value={inputValue} onChange={handleChange} />
          </form>
        </StyledInputWrapper>
      </StyledWrapper>
      <StyledPwWrapper>
        <img src={key} width="30px" height="30px" />
        <StyledPassword type="password" placeholder="비밀번호를 입력해주세요" value={pw} onChange={handlePassword} />
      </StyledPwWrapper>
      <img src={gobtn} onClick={handleCheckedList} />
      <StyledLinkWrapper>
        <StyledLinkBtn onClick={() => handleCopyClipBoard(text)}>링크 공유하기</StyledLinkBtn>
        <StyledLinkBtn onClick={() => navigate('/')}>나도 쫄 링크 만들기</StyledLinkBtn>
      </StyledLinkWrapper>
    </StyledRoot>
  );
}

export default Main;

const StyledRoot = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex-direction: column;
  align-items: center;
  width: 31.7rem;
  margin: 0 auto;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 274px;
  height: 143px;
  background: #c4e5c1;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  gap: 2.2rem;
  & > span {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.8rem;
  width: 100%;

  & > span {
    display: flex;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.8rem;
    align-items: center;
    & > img {
      margin-left: 1rem;
    }
  }
  & > p {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #a3a3a3;
    margin-top: 1.2rem;
  }
  & em {
    font-weight: 700;
  }
`;

const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

const StyledInput = styled.input`
  border: 0;
  outline: 0;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(119, 119, 119, 0.5);
  width: 100%;

  &::placeholder {
    font-size: 1.1rem;
    line-height: 1.3rem;
    text-align: center;
  }
`;

const StyledPassword = styled.input`
  border: 0;
  outline: 0;
  padding: 0.5rem;
  border-bottom: 1px solid rgba(119, 119, 119, 0.5);
  text-align: center;

  &::placeholder {
    font-size: 1.1rem;
    line-height: 1.3rem;
    text-align: center;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2.6rem;
  width: 100%;
  overflow: scroll;
  margin-top: 6rem;
  margin-bottom: 4rem;
`;

const StyledLinkBtn = styled.div`
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #a3a3a3;
  border-bottom: 1px solid #a3a3a3;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 1.7rem;
  margin-top: 1.8rem;
  margin-bottom: 3.8rem;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  gap: 1.4rem;
  & > form {
    display: flex;
    flex: 1;
  }
`;

const StyledPwWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
