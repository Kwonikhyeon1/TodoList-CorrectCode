import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getMyInfo, setMyInfo, 
         getAllMemberInfo, setTodoSvcMemberDB, 
         getAllTodoInfo, setTodoSvcTodoDB,
         getDateTime } from '../js/utils';
import { getLoginedSessionID, setLoginedSessionID } from '../js/session';

const Modify = ({setIsSignIned}) => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log('[Modify] useEffect()');

        let myInfo = getMyInfo(getLoginedSessionID());

        if (myInfo === undefined) {
            alert('Please SIGN-IN!!');
            navigate('/signin');
            return;
        }

        setUId(myInfo.uId);
        setUPw(myInfo.uPw);
        setUMail(myInfo.uMail);
        setUPhone(myInfo.uPhone);

    }, []);

    // handler
    const uPwChangeHandler = (e) => {
        console.log('[Modify] uPwChangeHandler()');
        setUPw(e.target.value);
    }

    const uMailChangeHandler = (e) => {
        console.log('[Modify] uMailChangeHandler()');
        setUMail(e.target.value);
    }

    const uPhoneChangeHandler = (e) => {
        console.log('[Modify] uPhoneChangeHandler()');
        setUPhone(e.target.value);
    }
    
    const modifyBtnClickHandler = () => {
        console.log('[Modify] modifyBtnClickHandler()');

        let myInfo = getMyInfo(getLoginedSessionID());      // 변경 전(현재) 나의 정보

        myInfo.uPw = uPw;
        myInfo.uMail = uMail;
        myInfo.uPhone = uPhone;
        myInfo.uModDate = getDateTime();                    // 나의 정보 업데이트

        setMyInfo(getLoginedSessionID(), myInfo);           // DB 업데이트

        alert('MODIFY SUCCESS!!');

        navigate('/');

    }

    const deleteBtnClickHandler = () => {
        console.log('[Modify] deleteBtnClickHandler()');

        if (window.confirm('really?')) {
            // DELETE MEMBER INFO
            let allMemberInfo = getAllMemberInfo();
            delete allMemberInfo[getLoginedSessionID()];
            setTodoSvcMemberDB(allMemberInfo);

            // DELETE TODO INFO
            let allTodoInfo = getAllTodoInfo();
            delete allTodoInfo[uId];
            setTodoSvcTodoDB(allTodoInfo);

            alert('DELETE SUCCESS!!');  // notification UI

            setLoginedSessionID();      // 세션 정리

            setIsSignIned(false);       // 메뉴 정리

            navigate('/')               // 화면 전환

        } else {
            alert('DELETE CANCELED!!');  // notification UI

        }

    }

    return(
        <div className="modify">
            <h3>MODIFY</h3>
            <input className="txt-basic" value={uId} type="text" readOnly/>
            <br />
            <input className="txt-basic" value={uPw} type="password" onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input className="txt-basic" value={uMail} type="email" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input className="txt-basic" value={uPhone} type="text" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input className="btn-basic" type="button" value="MODIFY" onClick={modifyBtnClickHandler}/>
            <input className="btn-basic" type="button" value="DELETE" onClick={deleteBtnClickHandler}/>
        </div>
    )
}

export default Modify;