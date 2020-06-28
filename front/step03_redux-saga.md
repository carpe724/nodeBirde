# redux saga
1. 기본셋팅
    - npm i redux-saga
    - npm i next-redux-saga
    - [store/configureStore.js] // redux-saga 붙이기 주석참고
    - [pages/_app.js] //redux-saga 붙이기 주석참고
2. [sagas/index.js] 
    - generator 개념 알기 
        .next()로 다음값, 
        중단점(yield)이 있는 함수, 
        done: true 가 되면 정지.
    - npm i axios
    - 페이지내 주석 참고
3. saga 분리하기
    - prevDivide_index.js index.js 비교 주석 참고
4. [reducers/] reducer 엑션 변경하기
    - _REQUEST, _SUCCESS, _FAILURE 로 3가지 엑션으로 수정하기.
    - isLoggingIn, isLoggingOut 추가
5. 바뀐 reducers 수정하기.
    - [component/LoginForm.js] isLoggingIn 추가, dispatch(loginRequestAction) 액션명 수정
    - [component/UserProfile.js] isLoggingOut 추가, me <Card.Meta> 닉네임 추가, dispatch(logoutRequestAction) 액션명 수정