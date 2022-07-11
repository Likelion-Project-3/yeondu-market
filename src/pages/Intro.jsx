import React from "react";
import './Intro.css'

function Intro() {
    return (
        <div className="loginMain">
            <h1 className="headTitle">로그인</h1>
            <section className="loginSection">
                <div className="pea">완두콩</div>
                <article className="centerWebLogin">
                    <button className="kakao" type="button">카카오톡 계정으로 로그인</button>
                    <button className="google" type="button">구글 계정으로 로그인</button>
                    <button className="facebook" type="button">페이스북 계정으로 로그인</button>
                    <p className="bottomLogin">
                        <a id="email" href="/Login">이메일로 로그인</a>
                        <a id="signup" href="/join">회원가입</a>
                    </p>
                </article>
            </section>
        </div>
    );
}
export default Intro;