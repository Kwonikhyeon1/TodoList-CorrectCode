// VARIABLE
export const MEMBER_DB_IN_LOCALSTORAGE = 'todoSvcMemberDB';
export const TODO_DB_IN_LOCALSTORAGE = 'todoSvcTodoDB';

// FUINCTION
// MEMBER
export const getTodoSvcMemberDB = () => {
    console.log('[utils] getTodoSvcMemberDB()');

    return localStorage.getItem(MEMBER_DB_IN_LOCALSTORAGE);

}

export const setTodoSvcMemberDB = (mems) => {
    console.log('[utils] setTodoSvcMemberDB()');

    localStorage.setItem(MEMBER_DB_IN_LOCALSTORAGE, JSON.stringify(mems));

}

export const getMyInfo = (uId) => {
    console.log('[utils] getMyInfo()');

    if (getTodoSvcMemberDB() === null) {
        return undefined;
    }

    let mems = JSON.parse(getTodoSvcMemberDB());
    let myInfo = mems[uId];

    return myInfo;

}

export const setMyInfo = (uId, myInfo) => {
    console.log('[utils] setMyInfo()');

    let mems = JSON.parse(getTodoSvcMemberDB());
    mems[uId] = myInfo;

    setTodoSvcMemberDB(mems);

}

export const getAllMemberInfo = () => {
    console.log('[utils] getAllMemberInfo()');

    return JSON.parse(getTodoSvcMemberDB());

}

// TODO
export const getTodoSvcTodoDB = () => {
    console.log('[utils] getTodoSvcTodoDB()');

    return localStorage.getItem(TODO_DB_IN_LOCALSTORAGE);

}

export const setTodoSvcTodoDB = (todos) => {
    console.log('[utils] setTodoSvcTodoDB()');
    
    localStorage.setItem(TODO_DB_IN_LOCALSTORAGE, JSON.stringify(todos));

}

export const getMyTodos = (uId) => {
    console.log('[utils] getMyTodos()');

    let todos = JSON.parse(getTodoSvcTodoDB());
    let myTodos = todos[uId];

    return myTodos;

}

export const setMyTodos = (uId, myTodos) => {
    console.log('[utils] setMyTodos()');

    let todos = JSON.parse(getTodoSvcTodoDB());
    todos[uId] = myTodos;

    setTodoSvcTodoDB(todos);

}

export const getAllTodoInfo = () => {
    console.log('[utils] getAllTodoInfo()');

    return JSON.parse(getTodoSvcTodoDB());

}

export const getToBeModifiedTodo = (uId, key) => {
    console.log('[utils] getToBeModifiedTodo()');

    return getMyTodos(uId)[key];

}

// ETC
export const getDateTime = () => {
    console.log('[utils] getDateTime()');

    let now = new Date();
    let fullYear = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10 ) month = '0' + month;
    let date = now.getDate();
    if (date < 10 ) date = '0' + date;
    let hours = now.getHours();
    if (hours < 10 ) hours = '0' + hours;
    let minutes = now.getMinutes();
    if (minutes < 10 ) minutes = '0' + minutes;
    let seconds = now.getSeconds();
    if (seconds < 10 ) seconds = '0' + seconds;

    return `${fullYear}/${month}/${date} ${hours}:${minutes}:${seconds}`;

}

export const replaceDateTime = (dateTime) => {
    console.log('[utils] replaceDateTime()');

    return dateTime.replaceAll('/', '').replaceAll(' ', '').replaceAll(':', '');

}

export const convertMapToArray = (map) => {
    console.log('[utils] convertMapToArray()');

    let keys = Object.keys(map);

    let arr = [];
    for (let i = 0; i < keys.length; i++) {
        let data = map[keys[i]];
        data['key'] = keys[i];
        arr.push(data);
    }

    return arr;

}

export const createRandomNum = (min, max) => {
    console.log('[utils] createRandomNum()');

    return Math.floor(Math.random() * max) + min;

}