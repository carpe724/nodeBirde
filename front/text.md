검색엔진에서 검색이 되는게 필요하다 => next 사용 필요
검색엔진에서 검색이 되는게 필요없다 => 단순 react, html, css

# front Dev
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


