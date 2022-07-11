import React from "react";
import "../pages/style/Login.css";

import { Link } from "react-router-dom";
import IdPwForm from "../components/loginjoin/IdPwForm";
import LoginButton from "../components/loginjoin/LoginButton";

function Login() {
    return (
        <div className="mainLogin">
            <h1 className="singupTitle">로그인</h1>
            <form>
                <IdPwForm />
                <LoginButton value="로그인" />
            </form>
            <Link to="/join">
                <button className="nextPage">이메일로 회원가입</button>
            </Link>
        </div>
    );
}
export default Login;
