# redux
1. store/configureStore.js 생성
    - npm i next-redux-wrapper
    - next에 redux를 붙혀주는 라이브러리 next-redux-wrapper
    - createWrapper 함수 사용
    - debug: process.env.NODE_ENV === 'development', 개발시 디버그 옵션 추가

2. _app.js에서
    - npm i redux react-redux;
    - 하이오더컴포넌트로 감싸주기
    export default NodeBird; ->
    export default wrapper.withRedux(NodeBird);
    * 기존 redux에서 컴포넌트를 감싸는 <Provider store={store}> ... </Provider> 구문이 들어갔으니 현재 6버전에서부터는 생략됨 

3. reducer 구동 과정
    - const store = createStore(reducer); store 생성
    - store(state + action)에 type과 data 전송(dispatch)

4. 실제 redux 적용하기    
    - [reducers/index.js] initialState user, post 생성
    - login action 만들기 (action creater로)
    - login reducer함수에 추가 default: return state는 기본셋팅
    - [components/AppLayout.js] 
        1. { useSelector } from 'react-redux' // useState 를 useSelector로 변경
        2. component 내 prop 전달 삭제
    - [component/LoginForm.js] [component/UserProfile.js]
        1. prop 전달받은거 삭제
        2. import { useDispatch } from 'react-redux'; const dispatch = useDispatch(); // dispatch 추가
        3. import { loginAction } from '../reducers'; setIsLoggedIn(true); -> dispatch(loginAction());
    - redux 서버사이드 렌더링을 위해
        1. import { HYDRATE } from 'next-redux-wrapper'; 추가
        2. reducer함수에 
            case HYDRATE:
                return {...state, ...action.payload}; 추가

5. redux history 체크를 위해서 부가기능 설치
    - createStore 두번째 인자로 enhancer 추가
    - enhance 옵션 추가, 옵션 import
    - npm i redux-devtools-extension >> dev 모드일때 devtools추가

6. redux initialState, action, case 분리하기
    - [post.js] [user.js] 파일분리
    - initialState(export 추가), action, case 분리
    - case(user, post 의 state 뎁스 구조가 바뀐점 수정)
    - [index.js] 에서 combinReducer 추가하여 리듀서 함수끼리 합칠수 있게한다.
