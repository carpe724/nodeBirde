import { HYDRATE } from 'next-redux-wrapper';

import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// const initialState = {
//     user: {
//         isLoggedIn: false,
//         user: null,
//         signUpData: {},
//         loginData: {},
//     },
//     post: {
//         mainPosts: [],
//     }
// };

// export const loginAction = (data) => {
//     return {
//         type: 'LOG_IN',
//         data,
//     }
// }

// export const logoutAction = (data) => {
//     return {
//         type: 'LOG_OUT',
//     }
// }

// ------------- action

// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'codeMark'
// }

// ------------- action creator
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// };
// changeNickname('codeMark');

// store.dispatch(changeNickname('codeMark'));

// (이전상태, 액션) => 다음상태 [함수]
// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
        // case 'CHANGE_NICKNAME':
        //     return{
        //         ...state,
        //         name: action.data,
        //     }


        // case HYDRATE:
        //     return {...state, ...action.payload};


        // case 'LOG_IN':
        //     return{
        //         ...state,
        //         user: {
        //             ...state.user,
        //             isLoggedIn : true,
        //             user: action.data,
        //         },
        //     };
        // case 'LOG_OUT':
        //     return{
        //         ...state,
        //         user: {
        //             ...state.user,
        //             isLoggedIn : false,
        //             user: null,
        //         },
        //     };


//         default:
//             return state;
//     }
// };

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type){
            case HYDRATE:
            return {...state, ...action.payload};
            default:
                return state;
        }
    },

    user,
    post,
})

export default rootReducer;