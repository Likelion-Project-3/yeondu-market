import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import IdPwForm from "../components/loginjoin/IdPwForm";
import LoginButton from "../components/loginjoin/LoginButton";

function Join(props) {
    const { setNextPage, setInput, input } = props;
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordCheckError, setPasswordCheckError] = useState("");
    const [passedEmail, setPassedEmail] = useState(false);
    const [passedPassword, setPassedPassword] = useState(false);
    const [passedPasswordCheck, setPassedPasswordCheck] = useState(false);
    const [success, setSuccess] = useState(false);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, []);

    const handleChangeInput = (e) => {
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    useEffect(() => {
        setEmailError();
    }, [input.email]);

    useEffect(() => {
        setPasswordError();
    }, [input.password]);

    useEffect(() => {
        setPasswordCheckError();
    }, [input.passwordCheck]);

    const handleEmailBlur = async () => {
        try {
            const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            if (!input.email) {
                setEmailError("* 이메일은 필수 입력사항 입니다.");
                setPassedEmail(false);
            } else if (!regex.test(input.email)) {
                setEmailError("* 잘못된 이메일 형식입니다.");
                setPassedEmail(false);
            }

            const response = await axios.post(BASE_URL + "/user/emailvalid", {
                user: {
                    email: input.email,
                },
            });
            console.log(response);

            if (response.data.message === "이미 가입된 이메일 주소 입니다.") {
                setEmailError(`* ${response.data.message}`);
                setPassedEmail(false);
            } else if (response.data.message === "사용 가능한 이메일 입니다.") {
                setPassedEmail(true);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handlePasswordBlur = () => {
        if (!input.password) {
            setPasswordError("* 비밀번호는 필수 입력사항 입니다.");
            setPassedPasswordCheck(false);
        } else if (input.password.length < 6) {
            setPasswordError("* 비밀번호는 6자 이상이어야 합니다.");
            setPassedPasswordCheck(false);
        } else {
            setPassedPasswordCheck(true);
        }
    };

    const handlePasswordCheckBlur = () => {
        if (!input.passwordCheck) {
            setPasswordCheckError("* 비밀번호 확인은 필수 입력사항 입니다.");
            setPassedPassword(false);
        } else if (input.passwordCheck !== input.password) {
            setPasswordCheckError("* 비밀번호가 일치하지 않습니다.");
            setPassedPassword(false);
        } else {
            setPassedPassword(true);
        }
    };

    useEffect(() => {
        passedEmail && passedPassword && passedPasswordCheck
            ? setSuccess(true)
            : setSuccess(false);
    });

    return (
        <div className="loginWrap">
            <section className="loginPart">
                <h1 className="singupTitle">이메일로 회원가입</h1>
                <form>
                    <IdPwForm
                        eValue={input.email}
                        onChange={handleChangeInput}
                        eOnBlur={handleEmailBlur}
                        useRef={userRef}
                        cautionMsgClassName="cautionText none"
                        eCautionMsg={emailError}
                        pValue={input.password}
                        pOnBlur={handlePasswordBlur}
                        pCautionMsg={passwordError}
                    />
                    <div>
                        <label htmlFor="passwordEmail" id="checkPassword">
                            비밀번호 확인
                        </label>
                        <input
                            type="password"
                            name="passwordCheck"
                            id="passwordEmail"
                            placeholder="비밀번호를 입력해주세요"
                            value={input.passwordCheck}
                            onChange={handleChangeInput}
                            onBlur={handlePasswordCheckBlur}
                        />
                    </div>
                    <strong className="cautionText none">
                        {passwordCheckError}
                    </strong>
                    <LoginButton
                        type="button"
                        className={`loginBtn ${
                            success ? "loginBtnActive" : ""
                        }`}
                        onClick={() => {
                            setNextPage(true);
                        }}
                        disabled={success ? false : true}
                        value="다음"
                    />
                </form>
            </section>
        </div>
    );
}
export default Join;
