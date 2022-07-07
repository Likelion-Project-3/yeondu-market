import React from "react";
import './LoginButton.css';

function LoginButton(props){
    return(
    <>
        <input type="submit" id="login" value={props.value}/>
    </>
    );
}
export default LoginButton;