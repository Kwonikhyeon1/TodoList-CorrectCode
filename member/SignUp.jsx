import React, { useState } from "react";
import { getTodoSvcMemberDB, setTodoSvcMemberDB, 
        getDateTime,
        getTodoSvcTodoDB, setTodoSvcTodoDB } from '../js/utils';
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    // hook
    const [uId, setUId] = useState('');
    const [uPw, setUPw] = useState('');
    const [uMail, setUMail] = useState('');
    const [uPhone, setUPhone] = useState('');

    const navigate = useNavigate();

    // handler
    const uIdChangeHandler = (e) => {
        console.log('[SignUp] uIdChangeHandler()');
        setUId(e.target.value);
    }

    const uPwChangeHandler = (e) => {
        console.log('[SignUp] uPwChangeHandler()');
        setUPw(e.target.value);
    }

    const uMailChangeHandler = (e) => {
        console.log('[SignUp] uMailChangeHandler()');
        setUMail(e.target.value);
    }

    const uPhoneChangeHandler = (e) => {
        console.log('[SignUp] uPhoneChangeHandler()');
        setUPhone(e.target.value);
    }
    
    const signUpBtnClickHandler = () => {
        console.log('[SignUp] signUpBtnClickHandler()');

        // MEMBER DB INSERT
        let todoSvcMemberDB = getTodoSvcMemberDB();
        if (todoSvcMemberDB === null) {
            let newMemObj = {
                [uId]: {
                    'uId': uId,
                    'uPw': uPw,
                    'uMail': uMail,
                    'uPhone': uPhone,
                    'uRegDate': getDateTime(),
                    'uModDate': getDateTime(),
                }
            }

            setTodoSvcMemberDB(newMemObj);

        } else {

            let todoSvcMembers = JSON.parse(todoSvcMemberDB);
            todoSvcMembers[uId] = {
                'uId': uId,
                'uPw': uPw,
                'uMail': uMail,
                'uPhone': uPhone,
                'uRegDate': getDateTime(),
                'uModDate': getDateTime(),
            }

            setTodoSvcMemberDB(todoSvcMembers);

        }

        // TODO EMPTY DB CREATE
        let todoSvcTodoDB = getTodoSvcTodoDB();
        if (todoSvcTodoDB === null) {
            let newTodos = {
                [uId]: {}
            }

            setTodoSvcTodoDB(newTodos);

        } else {

            let todos = JSON.parse(todoSvcTodoDB);
            todos[uId] = {}

            setTodoSvcTodoDB(todos);

        }

        alert('SIGNUP SUCCESS!!');

        navigate('/');

    }

    return(
        <div className="sign-up">
            <h3>SIGN UP</h3>
            <input className="txt-basic" type="text" onChange={uIdChangeHandler} placeholder="INPUT USER ID"/>
            <br />
            <input className="txt-basic" type="password" onChange={uPwChangeHandler} placeholder="INPUT USER PW"/>
            <br />
            <input className="txt-basic" type="email" onChange={uMailChangeHandler} placeholder="INPUT USER MAIL"/>
            <br />
            <input className="txt-basic" type="text" onChange={uPhoneChangeHandler} placeholder="INPUT USER PHONE"/>
            <br />
            <input className="btn-basic" type="button" value="SIGN UP" onClick={signUpBtnClickHandler}/>
        </div>
    )
}

export default SignUp;