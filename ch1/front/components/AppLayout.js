import React, {useEffect} from 'react'
import {Menu, Input, Row, Col} from 'antd'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {useSelector, useDispatch} from 'react-redux'
import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import {LOAD_USER_REQUEST} from '../reducers/user'

const AppLayout = ({children}) => {
    const {isLoggedIn, me} = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!me){
            dispatch({
                type:LOAD_USER_REQUEST,
            });
        }
    },[]);

    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail"><Input.Search enterButton style={{ verticalAlign : 'middle'}}/></Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    Made by livinoid98
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children : PropTypes.elementType,
};

export default AppLayout;