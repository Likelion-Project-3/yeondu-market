import { useState } from "react";
import "./PostCommentInput.css";
import BasicProfileImg from "../common/BasicProfileImg";

function PostCommentInput() {
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
            <h2 className="ir">댓글 입력</h2>
            <BasicProfileImg size="xs" />
            <label htmlFor="commentInput" className="ir">
                댓글 입력창
            </label>
            <input
                type="text"
                placeholder="댓글 입력하기..."
                className="textInput"
                onChange={onChange}
                value={text}
                id="commentInput"
            />
            <input type="submit" value="게시" className="uploadBtn disabled" />
        </form>
    );
}
export default PostCommentInput;
