export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '마크',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/300px-Hopetoun_falls.jpg',
        },{
            src: 'https://lh3.googleusercontent.com/proxy/cM-PCN2gslTzIV3XWq6cP5xcpca-UL8yjqnstLYs63LIH-0uRXP5KZCSHsEcMZo-ailZav3Lb9ICCsjmmFy_rE2mf5yTz8wVQWjmLQ4p_dZ0T1tC_r_KOc_O',
        },{
            src: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F206CA00E4CF0B11229',
        },],
        Comments: [{
            User: {
                nickname: 'nero'
            },
            content: '우와 신기해요 ~',
        }],
        // db 시퀄라이즈에서 관계 데이터 합쳐지는 경우 대문자 시작 속성때문에 (User, Images, Comments) ,
        // 우선적으로 프론트 개발자라면 서버개발자와 리덕스 데이터 구조 합의 필요
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터 입니다',
    User: {
        id: 1,
        nickname: '마크',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                // dummyPost 를 배열 앞에다가 추가해야 게시글이 위에서부터 쌓임 >> 반대도가능?
                postAdded: true,
            }
        default: 
            return state;
    }
};

export default reducer;