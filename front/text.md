# front Dev 스타트
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