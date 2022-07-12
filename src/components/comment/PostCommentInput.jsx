import { useState } from "react";
import "./PostCommentInput.css";
import BasicProfileImg from "../BasicProfileImg";

export default function PostCommentInput() {
    const [text, setText] = useState("");
    const sendBtn = document.querySelector(".uploadBtn");
    const onChange = (e) => {
        setText(e.target.value);
        if (text.length !== 0) {
            sendBtn.classList.remove("disabled");
        }
    };

    return (
        <form className="PostCommentForm">
            <BasicProfileImg size="xs" />
            <input
                type="text"
                placeholder="댓글 입력하기..."
                className="textInput"
                onChange={onChange}
                value={text}
            />
            <input type="submit" value="게시" className="uploadBtn disabled" />
        </form>
    );
}
