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
    const initialInput = { email: "", password: "" };
    const [input, setInput] = useState(initialInput);
    const [cautionMsg, setCautionMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const userRef = useRef();
    useEffect(() => {
        userRef.current.focus();
    }, [])
    
    const [isActive, setIsActive] = useState(false);
    const isPassedLogin = () => {
        return input.email.match
        (/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) &&  input.password.length > 5
            ? setIsActive(true)
            : setIsActive(false);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(input.email, input.password);
        try {
            const response = await axios.post(url, {
                "user": {
                    "email": input.email,
                    "password": input.password
                },
            });
            
            console.log(response);
        
            if (response.data.status === 422) {
                console.log("dngkgkgdngkg하하하하");
                setIsActive(false);
                setCautionMsg('* 이메일 또는 비밀번호가 일치하지 않습니다.');
                // setInput({ 
                //     email: "",
                //     password: ""
                // });   
            } else if (response.data.user.intro) {
                localStorage.setItem('token', response.data.user.token);
                const token = localStorage.getItem('token');
                localStorage.setItem('accountname', response.data.user.accountname);
                const accountname = localStorage.getItem('accountname');
                localStorage.setItem('username', response.data.user.accountname);
                const username = localStorage.getItem('username');
                setSuccess(true);
            }
        } catch (err) {
            console.error(err);
        }
    };
    
    const goHome = () => {
        window.location.href = "/home";
    };
    
    return (
        <>
            {success ? (
                goHome()
            ) : (
                <div className="mainLogin">
                    <h1 className="singupTitle">로그인</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="loginEmail" id="checkEmail">
                                이메일
                            </label>
                            <input
                                onChange={handleChange}
                                onKeyUp={isPassedLogin}
                                ref={userRef}
                                type="email"
                                name="email"
                                id="loginEmail"
                                placeholder="이메일 주소를 입력해주세요"
                                value={input.email}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="passwordEmail" id="checkPassword">
                                비밀번호
                            </label>
                            <input
                                onChange={handleChange}
                                onKeyUp={isPassedLogin}
                                type="password"
                                name="password"
                                id="passwordEmail"
                                placeholder="비밀번호를 입력해주세요"
                                value={input.password}
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