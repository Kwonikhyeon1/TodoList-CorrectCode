import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMyInfo } from '../js/utils';
import { setLoginedSessionID } from '../js/session';

const SignIn = ({setIsSignIned}) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const navigate = useNavigate();

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[SignIn] uIdChangeHandler()');
        setUId(e.target.value);
    }

    const uPwChangeHandler = (e) => {
        console.log('[SignIn] uPwChangeHandler()');
        setUPw(e.target.value);
    }

    const signInBtnClickHandler = () => {
        console.log('[SignIn] signInBtnClickHandler()');
        
        let myInfo = getMyInfo(uId);

        if (myInfo !== undefined && myInfo.uPw === uPw) {
            alert('SIGNIN SUCCESS!!');

            setLoginedSessionID(uId);
            setIsSignIned(true);
            navigate('/');

        } else {
            alert('SIGNIN FAIL!!');

            setLoginedSessionID('');
            setIsSignIned(false);
            
            setUId('');
            setUPw('');

        }

    }

    return(
        <div className="sign-in">
            <h3>SIGN IN</h3>
            <input className="txt-basic" type="text" value={uId} onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input className="txt-basic" type="password" value={uPw} onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input className="btn-basic" type="button" value="SIGN IN" onClick={signInBtnClickHandler}/>
        </div>
    )
}

export default SignIn;