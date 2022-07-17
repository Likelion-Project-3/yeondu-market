import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../components/constants/baseUrl";
// import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

function UploadPost() {
    const [text, setText] = useState("");
    const [imgFile, setImgFile] = useState([]);
    const history = useHistory();
    const formData = new FormData();

    const onChange = (e) => {
        setText(e.target.value);
    };
    const postData = {
        post: {
            content: text,
            image: imgFile.join(", "),
        },
    };
    const token = localStorage.getItem("token");
    const handleUpload = async () => {
        const url = BASE_URL + "/post";
        try {
            if (!text && imgFile.length === 0) {
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

    const handleUploadImg = async (e) => {
        e.preventDefault();

        if (imgFile.length > 2) {
            alert("3개 이하의 파일을 업로드 하세요.");
        }

        const imgInput = e.target.files[0];
        setImgFile((imgFile) => [...imgFile, imgInput]);
        const url = BASE_URL + "/image/uploadfiles";
        formData.append("image", imgInput);

        try {
            const res = await axios(url, {
                method: "POST",
                headers: {
                    "Content-type": "multipart/form-data",
                },
                data: formData,
            });
            setImgFile([...imgFile, res.data[0]["filename"]]);
            console.log(imgFile);
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
                    {/* <UploadFileBtn
                        forAndId="file"
                        type="green50"
                        position="fixed"
                        right="1rem"
                        bottom="1rem"
                    /> */}
                </form>
                <label
                    htmlFor="file"
                    className="UploadFileLabel green50"
                    style={{
                        right: "1rem",
                        bottom: "1rem",
                        position: "fixed",
                    }}
                />
                <input
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleUploadImg}
                />
            </main>
        </>
    );
}
export default UploadPost;
