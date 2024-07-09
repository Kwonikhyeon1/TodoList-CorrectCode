import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getToBeModifiedTodo, getMyTodos, setMyTodos, getDateTime } from '../js/utils';

const TodoModify = () => {

    // hook
    const [todoTxt, setTodoTxt] = useState('');
    const navigate = useNavigate();

    const {uId, todoKey} = useParams();

    useEffect(() => {
        console.log('[TodoModify] useEffect()');

        let toBeModifiedTodo = getToBeModifiedTodo(uId, todoKey);
        setTodoTxt(toBeModifiedTodo.todoTxt);

    }, []);

    // handler
    const todoTxtChangeHandler = (e) => {
        console.log('[TodoModify] todoTxtChangeHandler()');
        setTodoTxt(e.target.value);

    }

    const modifyBtnClickHandler = () => {
        console.log('[TodoModify] modifyBtnClickHandler()');
        
        let myTodos = getMyTodos(uId);
        myTodos[todoKey].todoTxt = todoTxt;
        myTodos[todoKey].todoModDate = getDateTime();

        setMyTodos(uId, myTodos);

        alert('MODIFY SUCCESS!!');

        navigate('/todolist');

    }

    return(
        <div className="todo-modify">
            <h3>TODO MODIFY</h3>
            <input type="text" className="txt-large" value={todoTxt} onChange={todoTxtChangeHandler} />
            <br />
            <button className="btn-basic" onClick={modifyBtnClickHandler}>MODIFY</button>
        </div>
    )
}

export default TodoModify;