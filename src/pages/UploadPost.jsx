import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../components/constants/baseUrl";
import TopMenuComponent from "../components/common/TopMenuComponent";
import BasicProfileImg from "../components/common/BasicProfileImg";
import axios from "axios";
// import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

function UploadPost() {
    const [text, setText] = useState("");
    const [imgFile, setImgFile] = useState([]);
    const [imgSrc, setImgSrc] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [profileImg, setProfileImg] = useState("");
    const history = useHistory();
    const formData = new FormData();
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");
    const username = localStorage.getItem("username");

    useEffect(() => {
        const getUserProfile = async () => {
            const url = BASE_URL + `/profile/${accountname}`;

            try {
                const res = await axios(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                console.log(res.data.profile.image);
                setProfileImg(res.data.profile.image);
            } catch (err) {
                console.log(err);
            }
        };

        getUserProfile();
    }, []);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const postData = {
        post: {
            content: text,
            image: imgFile.join(", "),
        },
    };

    const upload = () => {
        if (text && text.length > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

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
            history.push("/myprofile");
        } catch (err) {
            console.log(err);
        }
    };

    // 이미지 업로드
    const handleUploadImg = async (e) => {
        const url = BASE_URL + "/image/uploadfiles";
        const imgInput = e.target.files[0];

        setImgFile((imgFile) => [...imgFile, imgInput.name]);
        formData.append("image", imgInput);

        if (imgFile.length > 2) {
            alert("3개 이하의 파일을 업로드 하세요.");
            return;
        }

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
                        setIsActive(imgSrc.length + 1 > 0 ? true : false);
                    };
                });
            };

            if (res.data.message === "이미지 파일만 업로드가 가능합니다.") {
                alert(
                    "업로드 가능한 확장자명: *.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
                );
                setImgFile([...imgFile]);
            } else {
                setImgFile([
                    ...imgFile,
                    "https://mandarin.api.weniv.co.kr/" +
                        res.data[0]["filename"],
                ]);
                imgPreview(imgInput);
            }
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteImg = (e) => {
        const index = e.target.parentElement.id;

        // 미리보기 이미지 삭제
        setImgSrc(
            imgSrc.filter((el, i) => {
                return i !== parseInt(index);
            })
        );

        // POST 요청할 이미지 삭제
        setImgFile(
            imgFile.filter((el, i) => {
                return i !== parseInt(index);
            })
        );
    };

    return (
        <>
            <TopMenuComponent
                topclassName="uploadPostHeader"
                rightclassName={`uploadBtn ${!isActive ? "disabled" : ""}`}
                inputtype="notext"
                title="업로드"
                type="submit"
                handlerRightBtn={handleUpload}
            />
            <main className="uploadPostMain">
                <h2 className="ir">게시글 작성</h2>
                <h4 className="ir">{username}님의 프로필 이미지</h4>
                {/* <div className="myProfileImg"></div> */}
                <BasicProfileImg
                    size="xs"
                    src={
                        profileImg || "../../assets/icon/basic-profile-img.png"
                    }
                />
                <form className="uploadForm">
                    <h3 className="ir">게시글 작성란</h3>
                    <textarea
                        placeholder="게시글 입력하기..."
                        cols="30"
                        rows="10"
                        onChange={onChange}
                        onKeyUp={upload}
                        value={text}
                    />
                    <h4 className="ir">추가된 사진</h4>
                    <div className="imgCont">
                        {imgSrc.map((img, index) => {
                            return (
                                <div className="imgBox" key={index} id={index}>
                                    <img
                                        src={img}
                                        className="imgSrc"
                                        alt="이미지 미리보기"
                                    />
                                    <button
                                        type="button"
                                        className="closeBtn"
                                        onClick={deleteImg}
                                    ></button>
                                </div>
                            );
                        })}
                    </div>
                </form>
                <h3 className="ir">이미지 첨부 버튼</h3>
                <label
                    htmlFor="file"
                    className="UploadFileLabel green50 "
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
