import React, {useState, useCallback} from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value)
    // }, [])
    const [id, onChangeId] = useInput('');

    // const [nickname, setNickname] = useState('');
    // const onChangeNickname = useCallback((e) => {
    //     setNickname(e.target.value)
    // }, [])
    const [nickname, onChangeNickname] = useInput('');

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value)
    // }, [])
    const [password, onChangePassword] = useInput('');

    // 비밀번호 체크 에러 처리
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password])

    // 약관동의
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    }, [term])

    const onSubmit = useCallback(()=>{
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password)
    }, [password, passwordCheck, term]);

    return (
        <>
            <Head> 
                <title>회원가입</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} onChange={onChangeId} required />
                    </div>
                    <div>
                        <label htmlFor="user-nickname">닉넴임</label>
                        <br />
                        <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
                    </div>
                    <div>
                        <label htmlFor="user-password-Check">비밀번호 체크</label>
                        <br />
                        <Input name="user-password-Check" type="password" value={passwordCheck} onChange={onChangePasswordCheck} required />
                        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                    </div>
                    <div>
                        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                        {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
                    </div>
                    <div style={{marginTop : 10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    )
}

export default Signup;