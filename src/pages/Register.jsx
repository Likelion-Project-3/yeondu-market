import { useState } from "react";
import Join from "./Join";
import SetProfile from "./SetProfile";

function Register() {
    const [nextPage, setNextPage] = useState(false);
    const [input, setInput] = useState({
        email: "",
        password: "",
        passwordCheck: "",
    });

    return (
        <>
            {nextPage ? (
                <SetProfile input={input} />
            ) : (
                <Join
                    setNextPage={setNextPage}
                    setInput={setInput}
                    input={input}
                />
            )}
        </>
    );
}
export default Register;
