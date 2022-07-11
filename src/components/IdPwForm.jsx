import React from "react";
import './IdPwForm.css';

function IdPwForm(){
    return(
        <>
            <div>
                <label htmlFor="loginEmail" id="checkEmail">이메일</label>
                <input type="email" name="loginEmail" id="loginEmail" placeholder="이메일 주소를 입력해주세요"/>
            </div>
            <div>
                <label htmlFor="passwordEmail" id="checkPassword">비밀번호</label>
                <input type="password" name="passwordEmail" id="passwordEmail" placeholder="비밀번호를 입력해주세요"/>
            </div>
        </>
        );
}
export default IdPwForm;