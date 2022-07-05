import { useState } from "react";
import "./UploadPost.css";

export default function UploadPost() {
    const [text, setText] = useState("");
    const uploadBtn = document.querySelector(".uploadBtn");
    const onChange = (e) => {
        setText(e.target.value);
        if (text.length !== 0) {
            uploadBtn.classList.remove("disabled");
        }
    };

    return (
        <>
            <nav className="uploadPostHeader">
                <button className="prevBtn"></button>
                <button className="uploadBtn disabled">업로드</button>
            </nav>
            <main className="uploadPostMain">
                <div className="myProfileImg"></div>
                <form className="uploadForm">
                    <textarea
                        placeholder="게시글 입력하기..."
                        cols="30"
                        rows="30"
                        onChange={onChange}
                    />
                    <label htmlFor="file"></label>
                    <input type="file" id="file" className="fileInput" />
                </form>
            </main>
        </>
    );
}
