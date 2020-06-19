import React, { useCallback } from 'react';
import {Card, Avatar, Button } from 'antd';

import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers/user';

// redux -->>
const UserProfile = () => {
    // redux -->>
    const dispatch = useDispatch();
    const onLogOut = useCallback(()=>{
        // redux -->>
        // setIsLoggedIn(false)
        dispatch(logoutAction());
    }, [])
    return(
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>MK</Avatar>}
                title="Mark"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
