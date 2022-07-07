import React from "react";
import './Join.css';

function Join(){
    return(
        <>
            <div>
                <label for="email" id="checkEmail">이메일</label>
                <input type="email" name="email" id="loginEmail" placeholder=""/>
            </div>
            <div>
                <label for="password" id="checkPassword">비밀번호</label>
                <input type="password" name="password" id="passwordEmail" placeholder=""/>
            </div>
        </>
        );
}
export default Join;