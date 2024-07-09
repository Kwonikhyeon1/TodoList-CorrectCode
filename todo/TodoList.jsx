import React, { useEffect, useState } from "react";
import { getLoginedSessionID } from '../js/session';
import { getMyTodos, setMyTodos } from '../js/utils';
import { useNavigate } from "react-router-dom";

const TodoList = () => {

    // hook
    const [myTodoArr, setMyTodoArr] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('[TodoList] useEffect');

        if (getLoginedSessionID() === '') {
            alert('PLEASE SIGN-IN!!');
            navigate('/signin');
            return;
        }

        refreshMyTodoArr();

    }, [refresh]);

    // handler
    const completeBtnClickHandler = (e, key) => {
        console.log('[TodoList] completeBtnClickHandler()');

        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComplete = true;
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();

    }

    const incompleteBtnClickHandler = (e, key) => {
        console.log('[TodoList] completeBtnClickHandler()');

        let myTodos = getMyTodos(getLoginedSessionID());
        myTodos[key].isComplete = false;
        setMyTodos(getLoginedSessionID(), myTodos);

        refreshMyTodoArr();

    }

    const modifyBtnClickHandler = (e, key) => {
        console.log('[TodoList] modifyBtnClickHandler()');
        
        navigate(`/todomodify/${getLoginedSessionID()}/${key}`);
        
    }
    
    const deleteBtnClickHandler = (e, key) => {
        console.log('[TodoList] deleteBtnClickHandler()');

        let result = window.confirm('Really?');
        if(result) {
            let myTodos = getMyTodos(getLoginedSessionID());
            delete myTodos[key];
            setMyTodos(getLoginedSessionID(), myTodos);

            alert('DELETE SUCCESS!!');

            setRefresh(v => !v);

        } else {
            alert('DELETE CANCELED!!');

        }

    }

    // function
    const refreshMyTodoArr = () => {
        console.log('[TodoList] refreshMyTodoArr()');

        let myTodos = getMyTodos(getLoginedSessionID());
        let keys = Object.keys(myTodos);

        let arr = [];
        for (let i = 0; i < keys.length; i++) {
            let myTodo =  myTodos[keys[i]];
            myTodo['key'] = keys[i];
            arr.push(myTodo);
        }

        setMyTodoArr(arr.reverse());

    }

    return(
        <div className="todo-list">
            <h3>TODO LIST</h3>
            <ul>
                {
                    myTodoArr.map((todo, idx) => {
                        return(
                            <li key={idx} className="todo-li">
                                <div>
                                    <span>{!todo.isComplete ? <b>[Proceeding]</b> : <b>[Complete]</b>}</span>
                                    <span><b>[{todo.todoExpirationDate}]</b></span>
                                    &nbsp;
                                    <span className={!todo.isComplete ? "todo-txt" : "todo-txt-completed"}>{todo.todoTxt}</span>
                                    {
                                        todo.isComplete !== true
                                        ?
                                        <>
                                            <button className="btn-basic" onClick={(e) => completeBtnClickHandler(e, todo.key)}>complete</button>
                                            <button className="btn-basic" onClick={(e) => modifyBtnClickHandler(e, todo.key)}>modify</button>
                                        </>
                                        :
                                        <>
                                            <button className="btn-basic" onClick={(e) => incompleteBtnClickHandler(e, todo.key)}>incomplete</button>
                                        </>

                                    }
                                    <button className="btn-basic" onClick={(e) => deleteBtnClickHandler(e, todo.key)}>delete</button>

                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;