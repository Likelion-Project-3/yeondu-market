import React from "react";
import idPwFrom from "./idPwFrom";
import LoginButton from "./LoginButton";

function Joinmembership(props){
    return(
    <div className="mainLogin">
        <h1 className="singupTitle">이메일로 회원가입</h1>
        <idPwFrom/>
        <LoginButton value="회원가입"/>
    </div>
    );
}
export default Joinmembership;