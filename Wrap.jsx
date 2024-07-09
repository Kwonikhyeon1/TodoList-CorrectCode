import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import SignUp from "./member/SignUp";
import SignIn from "./member/SignIn";
import Modify from "./member/Modify";
import TodoWrite from "./todo/TodoWrite";
import TodoList from "./todo/TodoList";
import TodoModify from "./todo/TodoModify";
import NG from "./NG";
import Menubar from "./Menubar";
import './css/wrap.css';

import AdminMenubar from './admin/AdminMenubar';
import AdminSignIn from './admin/AdminSignIn';
import AdminMemberList from './admin/AdminMemberList';

const Wrap = () => {

    // hook
    const [isSignIned, setIsSignIned] = useState(false);
    const [isAdminSignIned, setIsAdminSignIned] = useState(false);

    return(
        <BrowserRouter>
            <Header />
            <div id="wrap">
                <Routes>
                    <Route element={<Menubar isSignIned={isSignIned} setIsSignIned={setIsSignIned} />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/signup" element={<SignUp />}></Route>
                        <Route path="/signin" element={<SignIn setIsSignIned={setIsSignIned} />}></Route>
                        <Route path="/modify" element={<Modify setIsSignIned={setIsSignIned} />}></Route>
                        <Route path="/todowrite" element={<TodoWrite />}></Route>
                        <Route path="/todolist" element={<TodoList />}></Route>
                        <Route path="/todomodify/:uId/:todoKey" element={<TodoModify />}></Route>
                        <Route path="/*" element={<NG />}></Route>
                    </Route>
                    <Route element={<AdminMenubar isAdminSignIned={isAdminSignIned} setIsAdminSignIned={setIsAdminSignIned} />}>
                        <Route path="/adminsignin" element={<AdminSignIn setIsAdminSignIned={setIsAdminSignIned} />}></Route>
                        <Route path="/adminmemberlist" element={<AdminMemberList />}></Route>
                    </Route>

                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    )
}

export default Wrap;