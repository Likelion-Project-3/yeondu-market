import React from "react";
import  './LoginEmail.css';
import idPwForm from "./idPwForm";
import LoginButton from "./LoginButton";

function LoginEmail() {
    return(
        <div className="mainLogin">
        <h1 className="singupTitle">로그인</h1>
        <idPwForm/>
        <LoginButton value="로그인"/>
        <div className="nextPage">
            <a href="/joinmembership" className="nextPage">이메일로 회원가입</a>
        </div>
        </div>
    );
}
export default LoginEmail;
