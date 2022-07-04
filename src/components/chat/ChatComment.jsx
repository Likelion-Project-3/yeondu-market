import { useState } from "react";
import "./ChatComment.css";

export default function ChatComment() {
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
            <label htmlFor="file"></label>
            <input type="file" id="file" className="fileInput" />
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
