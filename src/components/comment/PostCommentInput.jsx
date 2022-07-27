import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/baseUrl";
import BasicProfileImg from "../common/BasicProfileImg";
import axios from "axios";
import "./PostCommentInput.css";

function PostCommentInput(props) {
    const [text, setText] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [isActive, setIsActive] = useState(false);
    const token = localStorage.getItem("token");
    const sendBtn = document.querySelector(".uploadBtn");

    const onChange = (e) => {
        setText(e.target.value);
        if (text.length !== 0) {
            sendBtn.classList.remove("disabled");
        }
    };

    const onKeyUp = () => {
        setIsActive(text.length > 0 ? true : false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const url = BASE_URL + `/post/${props.postId}/comments`;
        const comment = {
            comment: {
                content: text,
            },
        };

        try {
            const res = await axios(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
                data: comment,
            });
            console.log("res: ", res.data.comment);
            setText("");
            props.handleSubmit(); // 댓글 작성 후 댓글 리스트 새로고침
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
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

    return (
        <form className="PostCommentForm" onSubmit={onSubmit}>
            <h2 className="ir">댓글 입력</h2>
            <BasicProfileImg size="xs" src={profileImg} />
            <label htmlFor="commentInput" className="ir">
                댓글 입력창
            </label>
            <input
                type="text"
                placeholder="댓글 입력하기..."
                className="textInput"
                onChange={onChange}
                onKeyUp={onKeyUp}
                value={text}
                id="commentInput"
            />
            <input
                type="submit"
                value="게시"
                className={`uploadBtn ${!isActive ? "disabled" : ""}`}
            />
        </form>
    );
}
export default PostCommentInput;
