import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrappper = styled(Form)`
    padding : 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
    // const [id, setId] = useState('');
    // const onChangeId = useCallback((e) => {
    //     setId(e.target.value); 
    // }, [])
    const [id, onChangeId] = useInput('');

    // const [password, setPassword] = useState('');
    // const onChangePassword = useCallback((e) => {
    //     setPassword(e.target.value);
    // }, [])
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password])

    const style = useMemo(()=>({marginTop : 10}), []);

    const ButtonLeft = useMemo(()=>({marginLeft: 10}), []);

    return(
        <FormWrappper onFinish={onSubmitForm}>
            {/* htmlType submit 이 호출되면 onFinish 호출 */}
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input 
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button style={ButtonLeft}>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrappper>
    )
};

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;
