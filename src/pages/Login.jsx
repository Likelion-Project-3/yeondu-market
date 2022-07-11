import React from "react";
import  './Login.css';
import IdPwForm from "./IdPwForm";
import LoginButton from "../components/LoginButton";

function Login() {
    return(
        <div className="mainLogin">
        <h1 className="singupTitle">로그인</h1>
        <IdPwForm/>
        <LoginButton value="로그인"/>
        <div className="nextPage">
            <a href="/joinmembership" className="nextPage">이메일로 회원가입</a>
        </div>
        </div>
    );
}
export default Login;
