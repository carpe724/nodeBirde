import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {

    const followingList = [{nickname: '마크'}, {nickname: '아이언맨'}, {nickname: '베트맨'}];
    const followerList = [{nickname: '헤리포터'}, {nickname: '셜록홈즈'}, {nickname: '뽀로로'}];

    return (
        <>
            <Head> 
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    )
}

export default Profile;