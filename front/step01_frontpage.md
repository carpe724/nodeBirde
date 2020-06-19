검색엔진에서 검색이 되는게 필요하다 => next 사용 필요
검색엔진에서 검색이 되는게 필요없다 => 단순 react, html, css
react, vue 같은 싱글페이지는 -->> 데이터를 제외한 빈껍데기를 먼저 받고 이후(로딩창) 데이터를 받아 화면을 변경한다.

넥스트 프리패칭 : 사용자가 갈만한 다른페이지의 데이터도 미리 받음
서버사이드 랜더링 : 사용자(크롤링봇)의 "처음" 브라우저 방문시 백엔드 데이터까지 전무 모든 데이터를 받아서 화면에 보여줌 => 크롤링 봇이 로딩중화면이 아니라 정상적인 데이터 화면을 받아갈 수 있음

# front Dev 1step
1. node, npm 설치
2. npm init
    author "mark"
3. package.json
    - next 9버전 설치
        > npm i next@9
        _9.4.4 등으로 버전 설치됨 뒤에 자잘한 버전은 변동 가능
4. pages 폴더 생성
    - index.js 생성
    - next에서는 import react 가 생략가능하다.
    - 단 pages라는 폴더명 안에있는 코드스플리팅된 파일만 가능.
5. package.json
    - npm i react react-dom
    - npm run dev
        "scripts": {
            "dev": "next",
            "build": "next build"
        },
        뒤에있는 명령어를 실행
6. pages 폴더
    - profile, signup 페이지(파일) 추가
    - 서버를 실행후 페이지를 추가하면 인식을 못하면 서버를 재시작
7. component 폴더 생성
    - pages 폴더와는 다르게 이름을 다르게 해도 상관없다.
8. Applayout 
    - 레이아웃 공통요소
    - propTypes > npm i prop-types
    - TypeScript 대용
    - AppLayout 생성후 {children} Prop 를 활용해 pages들의 페이지마다 AppLayout을 감싸주어 해당 요소들이 AppLayout에 prop 으로 들어갈수 있게 한다.
    - 링크는 Next 의 링크 작성법을 따른다
        - import Link from 'next/link';
        - <Link href="/"><a>노드버드</a></Link>
8. eslint 설치 (코드의 통일, 코드를 깔끔하게)
    - npm i eslint -D
    - npm i eslint-plugin-import -D
    - npm i eslint-plugin-react -D
    - npm i eslint-plugin-react-hooks -D
    - .eslintrc 파일 생성
        - 설정은 일단 그대로 복사


# front Dev 2step
1. >npm i antd styled-components @ant-design/icons
    - antd 4 버전, 아이콘은 따로 설치하는게 체크포인트
2. component AppLayout.js
    - import { Menu } from 'antd'
    - 컴포넌트의 구성요소는 ant design 홈페이지를 참고
3. antd 의 css, 공통요소 처리를 위한 pages > _app.js
    - AppLayout.js 는 레이아웃 요소를 위한 공통요소 이지 모든 요소에 공통요소는 아님 구별됨.
    - _app.js 는 따라서 공통 css들 common css나 common js 등의 전체 공통요소 처리 페이지.
    - next <head> 테그 처리 > import Head from 'next/head';
    - 각페이지별 head 처리도 가능 
4. antd 레이아웃
    - 24 등분
    - xs = 모바일, md = 테블릿 (antd : break point 참고)
    - gutter 컬럼 사이에 간격 8 => 좌우 4픽셀 패딩
5. login 처리에 따른 화면 전환
    - 서버가 없으니 로그인처리 x, 더미데이터를 활용해보자. useState활용
    - const [isLoggedin, setIsLoggedIn] = useState(false);
    - component 폴더내 LoginForm, UserProfile 컴포넌트 js추가 > applayout에 임폴트
6. LoginForm
    - form 테그, label, htmlfor, value, onchange 활용해서 컴포넌트 작성
    - id, password 를 useState활용해서 저장
    - onchangeId, onchangePassword 함수 생성 => etarget.value의 set~ 활용을 통해 스테이트 업데이트
    - Button 의 htmlType="submit" 이 form 테그의 onFinish={onSubmitForm} 함수를 실행
    - onFinish 는 e prevent default 가 기본적용되어있다.
    - onSubmitForm -> setIsLoggedIn(true) => [AppLayout.js] isLoggedIn -> true로 변경 => UserProfile 컴포넌트 화면으로 변경

    * 컴포넌트내 스타일 수정시 객체로 일일이 넣으면 리렌더링 이슈가발생 style-component, memo 활용하여 style 적용
    - style-component : 
        <ButtonWrapper></ButtonWrapper>, 
        const ButtonWrapper = styled.div`
            margin-top: 10px;
        `;

    - memo 
        <test style={style}></test>
        const style = useMemo(()=>({marginTop : 10}), []);

7. UserProfile
    - antd Card, avatar, button 활용
    - <Button> onLogOut 함수 실행시 setIsLoggedIn(false) 으로 로그아웃 만들기

8. profile.js
    - NicknameEditForm, FollwList 컴포넌스 생성
    - followingList, followerList 더미 데이터 배열 저장후 data prop으로 전달.
    - header data 로 title도 전달.
    - components/NicknameEditForm.js 은 특별한건 없음

9. components/FollowList.js
    - prop 전달(header, data)이 있으므로 proptypes 설정하기
    - List option 설정 antd 참고
    - dataSource 로 data prop을 받고 rednderItem 에서 (item) 으로 배열이 반복되어 카드 추가
    - antd 아이콘들은 따로 추가되는걸 체크

10. 커스텀 hooks!
    - LoginForm, signup Form 의 Input 에 중복되는 작업을 hooks로 처리
    - hooks/useInput.js 로 정리
    - 비밀번호 체크 에러처리 및 약관동의는 내용이 다르므로 따로 처리
    - err내용을 styled-component로 처리
    - Err는 onChange 함수 실행시 true 가 되면 err 내용이 출력되도록 처리.
    - onSubmit 에서 페스워드 일치, 약관동의 등의 엑션을 한번더 체크 처리

    * 잘모르는 부분
    - hooks가 어떻게 동작하는거지?
    - useCallback 시 마지막 배열에 넣는 state는 무슨의미지?
    - 그전에 일단 useCallback, useMemo, useState 정확하게 알고있나?


