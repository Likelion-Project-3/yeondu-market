import React from "react";
import "./style/Login.css";
import "../components/loginjoin/IdPwForm.css";
import "../components/loginjoin/LoginButton.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
// import IdPwForm from "../components/loginjoin/IdPwForm";
// import LoginButton from "../components/loginjoin/LoginButton";
import axios from 'axios';
import { BASE_URL } from "../components/constants/baseUrl";
import Home from "./Home";

function Login() {
    const url = BASE_URL + '/user/login';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cautionMsg, setCautionMsg] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    const [isActive, setIsActive] = useState(false);
    const isPassedLogin = () => {
        return email.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i) &&  password.length > 6
            ? setIsActive(true)
            : setIsActive(false);
    };

    const emailFuc = (e) => {
        setEmail(e.target.value);
    };

    const passwordFuc = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const response = await axios.post(url, {
                "user": {
                    "email": email,
                    "password": password
                },
            });
            
            console.log(response);
        
            if (response.data.status === 422) {
                console.log("dngkgkgdngkg하하하하");
                setIsActive(false);
                setCautionMsg('* 이메일 또는 비밀번호가 일치하지 않습니다.');
                setEmail('');      
                setPassword('');
            } else if (response.data.user.intro) {
                localStorage.setItem('token', response.data.user.token);
                const token = localStorage.getItem('token');
                console.log(token);
                localStorage.setItem('accountname', response.data.user.accountname);
                const accountname = localStorage.getItem('accountname');
                console.log(accountname);
                setSuccess(true);
            } else {
                
            };
            
            } catch (err) {
            // if (!err?.response) {
            //     setErrMsg('No Server response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Email or Password');
            // } else {
            //     setErrMsg('errorrororor');
            // }
        }
    }

    return (
        <>
            {success ? (
                <Home />
            ) : (
                <div className="mainLogin">
                    <h1 className="singupTitle">로그인</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="loginEmail" id="checkEmail">
                                이메일
                            </label>
                            <input
                                onChange={emailFuc}
                                onKeyUp={isPassedLogin}
                                ref={userRef}
                                type="email"
                                name="email"
                                id="loginEmail"
                                placeholder="이메일 주소를 입력해주세요"
                                value={email}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="passwordEmail" id="checkPassword">
                                비밀번호
                            </label>
                            <input
                                onChange={passwordFuc}
                                onKeyUp={isPassedLogin}
                                type="password"
                                name="passwordEmail"
                                id="passwordEmail"
                                placeholder="비밀번호를 입력해주세요"
                                value={password}
                            />
                            <strong className={setIsActive ? 'cautionText none' : 'cautionText'}>{cautionMsg}</strong>
                        </div>
                            <input 
                            type="submit" 
                            id="login" 
                            className={`loginBtn ${isActive ? 'loginBtnActive' : ''}`} 
                            disabled={isActive ? false : true} 
                            value="로그인"
                             />
                    </form>
                    <Link to="/join">
                        <button className="nextPage">이메일로 회원가입</button>
                    </Link>
                </div>
            )}
        </>
    );
    }
export default Login;