import { useState } from "react";
import Join from "./Join";
import SetProfile from "./SetProfile";

function Register() {
    const [nextPage, setNextPage] = useState(false);
    const [input, setInput] = useState({
        email : '',
        password : ''
    });

    console.log('저장된 input : ', input);

    return (
        <>
            {nextPage ? <SetProfile input={input}/> : <Join setNextPage={setNextPage} setInput={setInput} input={input}/>}
        </>
    );
}
export default Register;