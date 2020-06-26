import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input , Row, Col } from 'antd';
import styled from 'styled-components';

// ---- redux 적용이후>>
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    // ---- redux 적용이후>>
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn); ===
    // const { isLoggedIn } = useSelector((state) => state.user);

    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {/* ---- redux 적용이후>> prop제거 */}
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">naver stock</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    // node : react 에 들어갈수 있는 모든것
}

export default AppLayout;