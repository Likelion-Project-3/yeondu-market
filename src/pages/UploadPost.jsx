import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../components/constants/baseUrl";
import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

export default function UploadPost() {
    const [text, setText] = useState("");
    const history = useHistory();
    const url = BASE_URL + "/post";
    const onChange = (e) => {
        setText(e.target.value);
    };
    const postData = {
        post: {
            content: text,
            // "image": String "imageurl1, imageurl2" 형식으로
        },
    };
    const token = localStorage.getItem("token");
    const handleUpload = async () => {
        try {
            if (!text) {
                alert("내용 또는 이미지를 입력해주세요.");
            }
            const res = await axios(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                data: postData,
            });
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <nav className="uploadPostHeader">
                <button className="prevBtn" onClick={history.goBack}></button>
                <button
                    className="uploadBtn"
                    type="submit"
                    onClick={handleUpload}
                >
                    업로드
                </button>
            </nav>
            <main className="uploadPostMain">
                <div className="myProfileImg"></div>
                <form className="uploadForm">
                    <textarea
                        placeholder="게시글 입력하기..."
                        cols="30"
                        rows="20"
                        onChange={onChange}
                        value={text}
                    />
                    <div className="imgCont">
                        <div></div>
                    </div>
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
