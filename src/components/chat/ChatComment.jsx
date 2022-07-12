import { useState } from "react";
import UploadFileBtn from "../button/UploadFileBtn";

import "./ChatComment.css";

function ChatComment() {
    const [text, setText] = useState("");
    const sendBtn = document.querySelector(".sendBtn");
    const onChange = (e) => {
        setText(e.target.value);
        if (text.length !== 0) {
            sendBtn.classList.remove("disabled");
        }
    };

    return (
        <form className="chatCommentForm">
            <UploadFileBtn forAndId="file" type="gray36" />
            <input
                type="text"
                placeholder="메시지 입력하기..."
                className="textInput"
                onChange={onChange}
                value={text}
            />
            <input type="submit" value="전송" className="sendBtn disabled" />
        </form>
    );
}

export default ChatComment;