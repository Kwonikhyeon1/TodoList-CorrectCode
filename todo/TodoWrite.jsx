import React, { useEffect, useState } from "react";

import { getMyTodos, setMyTodos, getDateTime, replaceDateTime } from '../js/utils'; 
import { getLoginedSessionID } from '../js/session'; 
import { useNavigate } from "react-router-dom";

const TodoWrite = () => {

    // hook
    const [todoTxt, setTodoTxt] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log('[TodoWrite] useEffect()');

        if (getLoginedSessionID() === '') {
            alert('PLEASE SIGN-IN!!');
            navigate('/signin');
            return;
        }

    }, []);

    // handler
    const todoTxtChangeHandler = (e) => {
        console.log('[TodoWrite] todoTxtChangeHandler()');
        setTodoTxt(e.target.value);

    }

    const expirationDateChangeHandler = (e) => {
        console.log('[TodoWrite] expirationDateChangeHandler()');
        setExpirationDate(e.target.value.replaceAll('-', ''));
        
    }

    const writeBtnClickHandler = () => {
        console.log('[TodoWrite] writeBtnClickHandler()');
        
        if (todoTxt === null || todoTxt == undefined || todoTxt === '' 
            || expirationDate === null || expirationDate === undefined || expirationDate == '') {

                alert('PLEASE INPUT TODO TEXT OR EXPIRATION DATE!!');
                return;

        }

        let myTodos = getMyTodos(getLoginedSessionID());
        console.log('myTodos ------------ ', myTodos);

        myTodos[replaceDateTime(getDateTime())] = {
            'todoTxt': todoTxt,
            'todoExpirationDate': expirationDate,
            'todoRegDate': getDateTime(),
            'todoModDate': getDateTime(),
        }

        setMyTodos(getLoginedSessionID(), myTodos);

        alert('TODO WRITE SUCCESS!!');

        navigate('/todolist');

    }

    return(
        <div className="todo-write">
            <h3>TODO WRITE</h3>
            <input type="text" className="txt-large" onChange={todoTxtChangeHandler} />
            <input type="date" onChange={expirationDateChangeHandler} />
            <br />
            <button className="btn-basic" onClick={writeBtnClickHandler}>WRITE</button>
        </div>
    )
}

export default TodoWrite;