export const initialState = {
    isLoggingIn: false, // 로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, // 로그아웃 시도중
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data,
    }
}
// export const loginSuccessAction = (data) => {
//     return {
//         type: 'LOG_IN_SUCCESS',
//         data,
//     }
// }
// export const loginFailureAction = (data) => {
//     return {
//         type: 'LOG_IN_FAILURE',
//         data,
//     }
// }

// saga에서 액션을 호출하므로 불필요

export const logoutRequestAction =  {
    type: 'LOG_OUT_REQUEST',
}
// export const logoutSuccessAction =  {
//     type: 'LOG_OUT_SUCCESS',
// }
// export const logoutFailureAction =  {
//     type: 'LOG_OUT_FAILURE',
// }

// saga에서 액션을 호출하므로 불필요


export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return{
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn : true,
                me: {...action.data, nickname: 'stickMark'},
            };
        case 'LOG_IN_FAILURE':
            return{
                ...state,
                isLoggingIn: false,
                isLoggedIn : false,
            };
        // LOG_IN

        case 'LOG_OUT_REQUEST':
            return{
                ...state,
                isLoggingOut : true,
                me: null,
            };
        case 'LOG_OUT_SUCCESS':
            return{
                ...state,
                isLoggingOut : false,
                isLoggedIn : false,
                me: null,
            };
        case 'LOG_OUT_FAILURE':
            return{
                ...state,
                isLoggingOut : false,
                isLoggedIn : false,
                me: null,
            };
        // LOG_OUT

        default: {
            return {
                ...state,
            }
        }
    }
};
