import React, { useState } from "react";

import { setAdminLoginedSessionID } from '../js/session';
import { useNavigate } from "react-router-dom";

const AdminSignIn = ({setIsAdminSignIned}) => {

    // hook
    const [aId, setAId] = useState('');
    const [aPw, setAPw] = useState('');

    const navigate = useNavigate();

    // handler
    const aIdChangeHandler = (e) => {
        console.log('[AdminSignIn] aIdChangeHandler()');
        setAId(e.target.value);
    }

    const aPwChangeHandler = (e) => {
        console.log('[AdminSignIn] aPwChangeHandler()');
        setAPw(e.target.value);
    }

    const signInBtnClickHandler = () => {
        console.log('[AdminSignIn] signInBtnClickHandler()');
        
        if (aId === 'admin' && aPw === '1234') {
            alert('ADMIN SIGN-IN SUCCESS!!');
            
            setAdminLoginedSessionID('admin');
            setIsAdminSignIned(true);

            navigate('/adminmemberlist');

        } else {
            alert('ADMIN SIGN-IN FAIL!!');

            setAId('');
            setAPw('');

        }

    }

    return(
        <div className="admin-sign-in">
            <h3>ADMIN SIGN IN</h3>
            <input className="txt-basic" type="text" value={aId} onChange={aIdChangeHandler} placeholder="INPUT ADMIN ID"/>
            <br />
            <input className="txt-basic" type="password" value={aPw} onChange={aPwChangeHandler} placeholder="INPUT ADMIN PW"/>
            <br />
            <input className="btn-basic" type="button" value="SIGN IN" onClick={signInBtnClickHandler}/>
        </div>
    )
}

export default AdminSignIn;