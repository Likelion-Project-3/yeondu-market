import React from "react";
import { Link } from "react-router-dom";
import "../pages/style/Intro.css";

function Intro() {
    return (
        <div className="loginMain">
            <h1 className="headTitle">로그인</h1>
            <section className="loginSection">
                <div className="pea">완두콩</div>
                {/* <a href="https://www.flaticon.com/kr/free-icons/" title=" 아이콘"> 아이콘  제작자: Freepik - Flaticon</a> */}
                <article className="centerWebLogin">
                    <button className="kakao" type="button">
                        카카오톡 계정으로 로그인
                    </button>
                    <button className="google" type="button">
                        구글 계정으로 로그인
                    </button>
                    <button className="facebook" type="button">
                        페이스북 계정으로 로그인
                    </button>
                    <p className="bottomLogin">
                        <Link id="email" to="/Login">
                            이메일로 로그인
                        </Link>
                        <Link id="signup" to="/join">
                            회원가입
                        </Link>
                    </p>
                </article>
            </section>
        </div>
    );
}
export default Intro;
