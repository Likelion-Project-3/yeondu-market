import React from "react";
import "./LoginButton.css";

function LoginButton(props) {
    return (
        <>
            <input type="submit" id="login" className="loginBtn" value={props.value} />
        </>
    );
}
export default LoginButton;
