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

7. [reducers/post.js] 작성
    - mainPosts initial data 구성
    - // db 시퀄라이즈에서 관계 데이터 합쳐지는 경우 대문자 시작 속성때문에 (User, Images, Comments) 등의 키값은 대문자로 주곤한다.
    - const ADD_POST = 'ADD_POST'; 변수명을 상수에 한번더 대입시켜 오타시 에러 체크 가능
    - dummyPost 생성
    - ADD_POST case 시 dummyPost 를 배열 앞에다가 추가해야 게시글이 위에서부터 쌓임 >> 반대도가능?

8. [pages/index.js] 페이지 작업
    - <PostForm /> <PostCard /> 작성
    - isLoggedin, mainPosts state 준비
    - isLoggedin -> 게시글적는 <PostForm /> 은 로그인 한 사용자만 보이게
    - mainPosts -> map을 사용하여 배열에 담긴 데이터를 가져오는데 map 사용시 key를 입력한다. 여기서 주의할점 key값에 index를 주면 안되는 경우
        1. 배열이 수정 삭제 되는 경우
        2. 배열의 순서가 변경되는 경우
    와 같이 key 값에 수정이 이루어지는 경우 index를 키값으로 주는건 안티패턴,
    따라서 reducers에 준비된 id를 사용하도록한다. 추가로 prop에 post 데이터 전송.

9. [components/PostForm.js] 작성
    - {Form, input, button} 등 테그 속성은 antd 참고
    - onChangeText > useState 사용
    - onSubmit > useDispatch, dispatch(addPost); + setText('') 전송후 textArea 비우기
    - 이미지 업로드 버튼
        1. input type="file" 에 ref(useRef) 추가
        2. 이미지 업로드 버튼에 onClickImageUpload
        3. onClickImageUpload 함수에서  ref.current.click()
    - 업로드된 이미지 미리보기는 다음 작업 imagePaths 는 일단 useSelector로 state.post의 imagepaths를 불러온다. 배열을 불러와서 컴포넌트를 추가함으로 map, key 체크하기

9. [components/PostCard.js] 작성
    - npm i @ant-design/icons
    - 버튼 카드 작성 > Optional chaining 기법을 활용해서 로그인 id를 체크 그리고 그게 게시물에 주인인지 아닌지를 판가름
    - 그 외 댓글 및 커버 이미지 화면 [components/PostImages.js], [components/CommentForm.js] 기본틀 작성
    -[components/CommentForm.js]
    - 의 경우 이 코멘트가 어떤 게시글의 코맨트 인지 알기 위해 게시글의 아이디를  prop로 넘긴다
    - 버튼 좋아요 및 댓글 토글 기능 (prev) => !(prev) 활용!
    - [components/PostImages.js] images.length 를 통해 1개 2개 3개이상 일 경우로 분기 처리, role="presentation" 체크

10. [components/imagesZoom/index.js]
    - imagesZoom 폴더를 하나더 생성
    - npm i react-slick
    - style.js 를 따로 분리해서 관리