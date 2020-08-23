import React, {useState, useCallback, useEffect} from 'react'
import {Form,Input,Checkbox,Button} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { Router } from 'next/router'
import {signUpRequestAction, SIGN_UP_REQUEST} from '../reducers/user'

const signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isSigningUp, me} = useSelector(state => state.user);

    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback( (e) => {
            setter(e.target.value);
        }, []);
        return [value, handler];
    };

    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    useEffect(() => {
        if(me){
            alert('성공적으로 회원가입 되었습니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        return dispatch({
            type : SIGN_UP_REQUEST,
            data: {
                userId : id,
                password,
                nickname: nick,
            }
        });
    }, [id, nick, password, passwordCheck, term]);
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    },[]);
    const onChangeNick = useCallback((e) => {
        setNick(e.target.value);
    },[]);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password]);
    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    },[]);
    return(
        <>
            <Form onSubmit={onSubmit} style={{padding:10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} type="password" required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck}/>
                    {passwordError && <div style={{color:'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>개인정보 이용에 동의합니다.</Checkbox>
                    {termError && <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button> 
                </div>
            </Form>
        </>
    );
};

export default signup;