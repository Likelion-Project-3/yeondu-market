import React from "react";
import IdPwForm from "../components/loginjoin/IdPwForm";
import LoginButton from "../components/loginjoin/LoginButton";

function Join(props) {
    return (
        <div className="mainLogin">
            <h1 className="singupTitle">이메일로 회원가입</h1>
            <IdPwForm />
            <LoginButton value="회원가입" />
        </div>
    );
}
export default Join;
