import { client } from 'cores/api';
import { useState } from 'react';
import styled from 'styled-components';

// import { ReactComponent as Button } from '../assets/btn_link.svg';
import button from '../assets/btn_link.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

function Login() {
  const [inputs, setInputs] = useState({
    nickname: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    getLinkId();
  };

  const getLinkId = async () => {
    const result = await client.post('/link', inputs);
    const { id } = result.data.data;
    window.location.href = `/main/${id}`;
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <StWrapper>
      <StLogoIcon />
      <StForm onSubmit={handleSubmit} id="login">
        <StNameInputWrapper>
          <StNameInput
            word={inputs.nickname.length}
            value={inputs.nickname}
            type="text"
            onChange={handleChangeInput}
            name="nickname"
            placeholder="홍길동,"
            maxLength={5}
            required
          />
          <StNameTitle>내일 뭐 해</StNameTitle>
        </StNameInputWrapper>
        <StPWDInputWrapper>
          <StPWDInput
            value={inputs.password}
            type="password"
            onChange={handleChangeInput}
            name="password"
            maxLength={4}
            placeholder="4자리 패스워드를 넣어주세요"
            required
          />
          <hr />
        </StPWDInputWrapper>
      </StForm>
      <StButton type="submit" form="login" url={button} />
      {/* <Button />
      </StButton> */}
    </StWrapper>
  );
}

export default Login;

const StForm = styled.form``;

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const StNameInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* line-height: 38px; */
  margin-bottom: 24px;
  /* width: 100%; */
`;

const StNameTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  padding-top: 5px;
`;

const StNameInput = styled.input`
  width: ${(props) => (props.word === 0 ? '100px' : `${props.word * 37}px`)};
  padding: 0px 5px;
  font-size: 32px;
  font-weight: 700;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: center;
    color: #b3b3b3;
    font-size: 32px;
  }
`;

const StPWDInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 72px;
  hr {
    color: #77777780;
    width: 272px;
  }
`;

const StPWDInput = styled.input`
  width: 272px;
  height: 20px;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: center;
    color: #77777780;
  }
`;

const StButton = styled.button`
  /* width: 172px;
  height: 68px;
  background-color: transparent;
  border: 0;
  outline: 0; */
  background-image: ${(props) => `url(${props.url})`};
  background-color: transparent;
  background-size: cover;
  width: 16.9rem;
  height: 6.4rem;
  border: none;
  margin-top: 6.9rem;
`;

const StLogoIcon = styled(Logo)`
  width: 92px;
  height: 60px;
  margin-bottom: 65px;
`;
