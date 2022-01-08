import { Button, Checkbox, Input } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/home');
    }
    return (
        <div className='loginContainer'>
            <div className='loginForm'>
                <div className='signInText'>Sign in</div>
                <div className='newUserText'>New user? <span className='createaccText'>Create an account</span></div>
                <div><Input size='middle' className='userInput signinWidth' placeholder='Username or email' /></div>
                <div><Input size='middle' className='userInput signinWidth' placeholder='Password' /></div>
                <div><Checkbox size='middle' className='signinWidth'>Keep me signed in</Checkbox></div>
                <Button size='middle' type='primary' className='signinWidth signinbutton' onClick={navigateTo}>Sign in</Button>
                <div className='signInOptionsText'>Or Sign In With</div>
            </div>
        </div>
    )
}
export default Login;