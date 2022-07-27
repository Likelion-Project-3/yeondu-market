import { BASE_URL } from "../constants/baseUrl";
import axios from "axios";
import "./Alert.css";

function PostAlert({ postId, handleCancel }) {
    const accountname = localStorage.getItem("accountname");

    const deletePost = async () => {
        const url = BASE_URL + `/post/${postId}`;
        const token = localStorage.getItem("token");

        try {
            const res = await axios(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            window.location = `/myprofile/${accountname}`;
            console.log(res);
        } catch (err) {
            // 404페이지로 이동
            console.log(err);
        }
    };

    return (
        <div className="alertWrap">
            <div className="ModalAlert">
                <span className="alertText">게시글을 삭제할까요?</span>
                <div className="wrapAlert">
                    <button
                        className="modalAlertBtn cancel"
                        onClick={handleCancel}
                    >
                        취소
                    </button>
                    <button
                        className="modalAlertBtn delete"
                        onClick={deletePost}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PostAlert;
