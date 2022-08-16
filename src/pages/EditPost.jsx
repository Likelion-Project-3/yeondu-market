import { React, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../components/constants/baseUrl";
import BasicProfileImg from "../components/common/BasicProfileImg";
import TopMenuComponent from "../components/common/TopMenuComponent";
import UploadFileBtn from "../components/button/UploadFileBtn";
import "../pages/style/UploadPost.css";

function EditPost() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const [text, setText] = useState("");
    const [imgFile, setImgFile] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [imgSrc, setImgSrc] = useState([]);
    const [profileImg, setProfileImg] = useState("");
    const accountname = localStorage.getItem("accountname");

    const history = useHistory();
    const { postId } = useParams();
    const formData = new FormData();
    const url = BASE_URL + `/post/${postId}`;

    useEffect(() => {
        setIsActive(true);
        const getUserProfile = async () => {
            const url = BASE_URL + "/user/myinfo";

            try {
                const res = await axios(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                setProfileImg(res.data.user.image);
            } catch (err) {
                console.log(err);
            }
        };

        getUserProfile();
    }, []);

    const handleOnChange = (e) => {
        setText(e.target.value);
    };

    const postData = {
        post: {
            content: text,
            image: imgFile.join(", "),
        },
    };

    // 텍스트, 이미지 입력 여부에 따라 버튼 활성화하기
    const handleActivate = () => {
        if (text && text.length > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

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
            history.push(`/myprofile/${accountname}`);
        } catch (err) {
            console.log(err);
        }
    };

    // 이미지 업로드
    const handleUploadImg = async (e) => {
        if (imgSrc.length >= 3) {
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
                console.log("updated imgfile: ", imgFile);
                console.log("updated imgsrc: ", imgSrc);

                imgPreview(imgInput);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteImg = (e) => {
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
                rightclassName={`uploadBtn ${isActive ? "" : "disabled"}`}
                inputtype="notext"
                title="업로드"
                type="submit"
                handlerRightBtn={handleUpload}
            />
            <main className="uploadPostMain">
                <h2 className="ir">게시글 작성</h2>
                <h4 className="ir">{username}님의 프로필 이미지</h4>
                <BasicProfileImg size="xs" src={profileImg} />
                <form className="uploadForm">
                    <h3 className="ir">게시글 작성란</h3>
                    <textarea
                        cols="30"
                        rows="5"
                        onChange={handleOnChange}
                        onKeyUp={handleActivate}
                        value={text}
                    />
                    <h4 className="ir">추가된 사진</h4>
                    <div className="imgCont">
                        {imgSrc
                            ? imgSrc.map((img, index) => {
                                  return (
                                      <div
                                          className="imgBox"
                                          key={index}
                                          id={index}
                                      >
                                          <img
                                              src={img}
                                              className="imgSrc"
                                              alt=""
                                          />
                                          <button
                                              type="button"
                                              className="closeBtn"
                                              onClick={handleDeleteImg}
                                          ></button>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </form>
                <h3 className="ir">이미지 첨부 버튼</h3>
                <UploadFileBtn
                    type="green50"
                    forAndId="file"
                    onChange={handleUploadImg}
                />
            </main>
        </>
    );
}
export default EditPost;
