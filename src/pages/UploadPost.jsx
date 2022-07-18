import { useState } from "react";
import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

function UploadPost() {
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
            <TopMenuComponent topclassName="uploadPostHeader" rightclassName="uploadBtn" title="업로드" type="submit"/>
            <main className="uploadPostMain">
                <div className="myProfileImg"></div>
                <form className="uploadForm">
                    <textarea
                        placeholder="게시글 입력하기..."
                        cols="30"
                        rows="30"
                        onChange={onChange}
                    />
                    {/* <label htmlFor="file"></label>
                    <input type="file" id="file" className="fileInput" /> */}
                    <UploadFileBtn
                        forAndId="file"
                        type="green50"
                        position="fixed"
                        right="1rem"
                        bottom="1rem"
                    />
                </form>
            </main>
        </>
    );
}
export default UploadPost;