import React from "react";
import "./IdPwForm.css";

function IdPwForm(props) {
    return (
        <>
            <div>
                <label htmlFor="loginEmail" id="checkEmail">
                    이메일
                </label>
                <input
                    type="email"
                    name="email"
                    id="loginEmail"
                    placeholder="이메일 주소를 입력해주세요"
                    value={props.eValue}
                    onBlur={props.eOnBlur}
                    onChange={props.onChange}
                    onKeyUp={props.onKeyUp}
                    ref={props.useRef}
                />
            </div>
            <strong className={props.cautionMsgClassName}>
                {props.eCautionMsg}
            </strong>
            <div>
                <label htmlFor="passwordEmail" id="checkPassword">
                    비밀번호
                </label>
                <input
                    type="password"
                    name="password"
                    id="passwordEmail"
                    placeholder="비밀번호를 입력해주세요"
                    value={props.pValue}
                    onBlur={props.pOnBlur}
                    onChange={props.onChange}
                    onKeyUp={props.onKeyUp}
                />
                <strong className={props.cautionMsgClassName}>
                    {props.pCautionMsg}
                </strong>
            </div>
        </>
    );
}
export default IdPwForm;
