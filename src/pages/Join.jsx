import React from "react";
import { useState, useEffect, useRef} from "react";
// import IdPwForm from "../components/loginjoin/IdPwForm";
// import LoginButton from "../components/loginjoin/LoginButton";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";

function Join(props) {
    const initialInput = { email: '', password: '' };
    const [input, setInput] = useState(initialInput);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passedEmail, setPassedEmail] = useState(false);
    const [passedPassword, setPassedPassword] = useState(false);
    const [success, setSuccess] = useState(false);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput({...input, [name]: value});

    };

    useEffect(() => {
        setEmailError();
    }, [input.email]);

    useEffect(() => {
        setPasswordError();
    }, [input.password]);

    const handleEmailBlur = async () => {
        try {
            const response = await axios.post(BASE_URL + '/user/emailvalid', {
                "user": {
                    "email": input.email,
                },
            });
            console.log(response);

            const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            
            if(!input.email) {
                setEmailError("* 필수 입력사항 입니다.");
                setPassedEmail(false);
            } else if (!regex.test(input.email)) {
                setEmailError("* 잘못된 이메일 형식입니다.");
                setPassedEmail(false);
            } 

            if (response.data.message === "이미 가입된 이메일 주소 입니다.") {
                setEmailError(`* ${response.data.message}`);
                setPassedEmail(false);
            }
            if (response.data.message === "사용 가능한 이메일 입니다.") {
                setPassedEmail(true);
            } 
        } catch (err) {
            console.error(err);
        }
    };

    const handlePasswordBlur = () => {
        if (!input.password) {
            setPasswordError("* 비밀번호는 필수 입력사항 입니다.");
            setPassedPassword(false);
        } else if (input.password.length < 6) {
            setPasswordError("* 비밀번호는 6자 이상이어야 합니다.");
            setPassedPassword(false);
        } else {
            setPassedPassword(true);
        }
    };

    useEffect(() => {
        passedEmail && passedPassword ? setSuccess(true): setSuccess(false);  
    },);

    return (
        <div className="mainLogin">
            <h1 className="singupTitle">이메일로 회원가입</h1>
            <form>
                <div>
                    <label htmlFor="loginEmail" id="checkEmail">
                        이메일
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="loginEmail"
                        placeholder="이메일 주소를 입력해주세요"
                        ref={userRef}
                        value={input.email}
                        onChange={handleChange}
                        onBlur={handleEmailBlur}
                        // required
                    />
                </div>
                <strong className="cautionText none">
                    {emailError}
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
                        value={input.password}
                        onChange={handleChange}
                        onBlur={handlePasswordBlur}
                    />
                </div>
                <strong className="cautionText none">
                    {passwordError}
                </strong>
                <input
                    type="button"
                    id="login"
                    className={`loginBtn ${success ? 'loginBtnActive' : ''}`}
                    onClick={() => {props.history.push("/setprofile")}}
                    disabled={success ? false : true}
                    value="다음"
                />
            </form>
        </div>
    );
}
export default Join;