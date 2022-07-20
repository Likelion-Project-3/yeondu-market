import { React, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../components/constants/baseUrl";
import TopMenuComponent from "../components/common/TopMenuComponent";
import "../pages/style/UploadPost.css";

function EditPost(props) {
    const [text, setText] = useState("");
    const [imgFile, setImgFile] = useState([]);
    // 기존에 있던 이미지
    const [imgSrc, setImgSrc] = useState([]);
    // 새로운 이미지
    const [newImgSrc, setNewImgSrc] = useState([]);
    const history = useHistory();
    const formData = new FormData();
    const post_id = props.data.post.id;
    // const post_id = "62d76d4c17ae666581792572";
    // const post_id = "62d76ee817ae6665817973c9";
    const url = BASE_URL + `/post/${post_id}`;

    const onChange = (e) => {
        setText(e.target.value);
    };

    const postData = {
        post: {
            content: text,
            image: imgSrc.concat(imgFile).join(", "),
        },
    };
    const token = localStorage.getItem("token");

    useEffect(() => {
        // 기존 게시글 불러오기
        const getPost = async () => {
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                })
                .then((response) => {
                    const postDetail = response.data.post;

                    setText(postDetail.content);
                    if (postDetail.image) {
                        setImgSrc(postDetail.image.split(", "));
                    }
                })
                .catch((err) => console.log(err));
        };

        getPost();
    }, []);

    // 텍스트와 이미지 POST 전송
    const handleUpload = async () => {
        try {
            if (!text && imgFile.length === 0) {
                alert("내용 또는 이미지를 입력해주세요.");
            }

            const res = await axios(url, {
                method: "PUT",
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
        if (imgSrc.length + newImgSrc.length >= 3) {
            alert("3개 이하의 파일을 업로드 하세요.");
            return;
        }

        const imgInput = e.target.files[0];
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
                        setNewImgSrc([...newImgSrc, reader.result]);
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
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <TopMenuComponent
                topclassName="uploadPostHeader"
                rightclassName="uploadBtn"
                inputtype="notext"
                title="업로드"
                type="submit"
                handlerRightBtn={handleUpload}
            />
            <main className="uploadPostMain">
                <div className="myProfileImg"></div>
                <form className="uploadForm">
                    <textarea
                        cols="30"
                        rows="10"
                        onChange={onChange}
                        value={text}
                    />
                    <div className="imgCont">
                        {imgSrc
                            ? imgSrc.map((img, index) => {
                                  return (
                                      <img
                                          key={index}
                                          src={`https://mandarin.api.weniv.co.kr/${img}`}
                                          className="imgBox"
                                          alt=""
                                      />
                                  );
                              })
                            : null}
                        {newImgSrc.map((img, index) => {
                            return (
                                <img
                                    key={index}
                                    src={img}
                                    className="imgBox"
                                    alt=""
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
export default EditPost;
