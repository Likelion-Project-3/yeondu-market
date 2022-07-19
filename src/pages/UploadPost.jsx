import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../components/constants/baseUrl";
// import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

function UploadPost() {
    const [text, setText] = useState("");
    const [imgFile, setImgFile] = useState([]);
    const [imgSrc, setImgSrc] = useState([]);
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

    // 텍스트와 이미지 POST 전송
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

    // 이미지 업로드
    const handleUploadImg = async (e) => {
        e.preventDefault();

        if (imgFile.length > 2) {
            alert("3개 이하의 파일을 업로드 하세요.");
            return;
        }

        const imgInput = e.target.files[0];
        setImgFile((imgFile) => [...imgFile, imgInput.name]);
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

            // 이미지 미리보기
            const imgPreview = (file) => {
                const reader = new FileReader();
                const imgBox = document.createElement("img");

                imgBox.className = "imgBox";
                reader.readAsDataURL(file);
                return new Promise((resolve) => {
                    reader.onload = () => {
                        setImgSrc([...imgSrc, reader.result]);
                        resolve();
                    };
                });
            };

            if (res.data.message === "이미지 파일만 업로드가 가능합니다.") {
                alert(
                    "업로드 가능한 확장자명: *.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
                );
                setImgFile([...imgFile]);
            } else {
                setImgFile([...imgFile, res.data[0]["filename"]]);
                imgPreview(imgInput);
            }
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <TopMenuComponent topclassName="uploadPostHeader" rightclassName="uploadBtn disabled" title="저장"/>
            <main className="uploadPostMain">
                <div className="myProfileImg"></div>
                <form className="uploadForm">
                    <textarea
                        placeholder="게시글 입력하기..."
                        cols="30"
                        rows="10"
                        onChange={onChange}
                        value={text}
                    />
                    <div className="imgCont">
                        {imgSrc.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    className="imgBox"
                                    alt="이미지 미리보기"
                                />
                            );
                        })}
                    </div>
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
