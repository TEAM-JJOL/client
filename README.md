# 쫄?!

### 서비스 한줄 소개
친구야 내일 하루 이거 함 해봐 ㅋ **쫄?!**

친구에게 색다른 **내일**을 선사해보세요

### 기술 스택
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)

### 사용 라이브러리
```
"axios": "^0.27.2",
"json-server": "^0.17.0",
"react": "^18.1.0",
"react-dom": "^18.1.0",
"react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
"styled-components": "^5.3.5",
"styled-reset": "^4.4.1",
```

### Code convention
- eslint, prettier사용
- react-router-dom v.6
- styled-components는 className 없이 선택자만으로 사용
- 변수, 폴더명, 컴포넌트가 아닌 js 파일은 camelCase로 선언
- 컴포넌트 파일은 UpperCamelCase.jsx로 선언


### Commit message convention
- feat: 새로운 기능의 추가  
- fix: 버그 수정
- css: css 관련 추가, 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)


### Git Branch convention
Git Flow 방식

+ main : 최종적으로 배포되는 브랜치

+ feat/{구현기능명} : main 브랜치 아래에서 컴포넌트 기능 단위로 나누어 브랜치 만들기


### Directory Structure
```
⎡ public
⎜  ⎿ index.html
⎣ src
   ├── App.jsx
   ├── assets
   │   ├── btn_finish_go.svg
   │   ├── btn_go.svg
   │   ├── btn_link.svg
   │   ├── btn_start.svg
   │   ├── button.svg
   │   ├── goBtn.png
   │   ├── goshim.png
   │   ├── ic_checkbtn.svg
   │   ├── ic_gobutton.svg
   │   ├── ic_logoGray.svg
   │   ├── ic_logoGreen.svg
   │   ├── icn_key.svg
   │   ├── logo.png
   │   ├── logo.svg
   │   ├── logoGray.svg
   │   ├── mainGoBtn.png
   │   ├── monster.png
   │   ├── 가.png
   │   ├── 고.png
   │   ├── 보.png
   │   └── 자.png
   ├── components
   │   ├── main
   │   │   └── ListItem.jsx
   │   └── result
   │       ├── Background.jsx
   │       └── ResultMissionList.jsx
   ├── cores
   │   ├── api.js
   │   ├── hooks
   │   │   └── useAPI.js
   │   └── router.jsx
   ├── index.jsx
   ├── pages
   │   ├── Intro.jsx
   │   ├── Login.jsx
   │   ├── Main.jsx
   │   └── Result.jsx
   └── styles
         ├── globalStyle.js
         └── theme.js
```

### 역할 분배

<table>
    <tr align="center">
        <td>
           💛 윤지영 💛
        </td>
        <td>
           인트로 페이지 뷰 구현 및 로직 구현<br>
           결과 페이지 뷰 구현 및 로직 구현
        </td>
    </tr>
    <tr align="center">
        <td>
            😎 이은아 😎
        </td>
        <td>
            로그인 페이지 뷰 구현 및 로직 구현<br>
           로그인 api, 결과 api 연결 
        </td>
    </tr>
    <tr align="center">
        <td>
            ☀️ 전희선 ☀️
        </td>
        <td>
           메인페이지 뷰 구현 및 로직 구현<br>
           mission 추가 api, mission get api, mission post api 추가
        </td>
    </tr>
</table>
