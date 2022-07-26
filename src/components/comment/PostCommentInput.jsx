import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseUrl";
import BasicProfileImg from "../common/BasicProfileImg";
import axios from "axios";
import "./PostCommentInput.css";

function PostCommentInput() {
    const [text, setText] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const accountname = localStorage.getItem("accountname");
    const token = localStorage.getItem("token");
    const sendBtn = document.querySelector(".uploadBtn");
    const onChange = (e) => {
        setText(e.target.value);
        if (text.length !== 0) {
            sendBtn.classList.remove("disabled");
        }
    };

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

    return (
        <form className="PostCommentForm">
            <h2 className="ir">댓글 입력</h2>
            <BasicProfileImg
                size="xs"
                src={profileImg || "../../assets/icon/basic-profile-img.png"}
            />
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
