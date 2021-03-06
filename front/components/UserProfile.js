import React, { useCallback } from 'react';
import {Card, Avatar, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

// redux -->>
const UserProfile = () => {
    // redux -->>
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        // redux -->>
        // setIsLoggedIn(false)
        dispatch(logoutRequestAction);
    }, [])

    const { me, isLoggingOut } = useSelector((state)=>state.user);

    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
