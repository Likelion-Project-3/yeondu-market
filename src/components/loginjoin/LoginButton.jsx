import React from "react";
import "./LoginButton.css";

function LoginButton(props) {
    return (
        <>
            <input
                type={props.type}
                id="login"
                className={props.className}
                onClick={props.onClick}
                disabled={props.disabled}
                value={props.value}
            />
        </>
    );
}
export default LoginButton;
