import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import "./Alert.css";

function PostAlert({ postId, handleCancel, myPost }) {
    const accountname = localStorage.getItem("accountname");
    const token = localStorage.getItem("token");

    const handleDeletePost = async () => {
        const url = BASE_URL + `/post/${postId}`;

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

    const handleReportPost = async () => {
        const url = BASE_URL + `/post/${postId}/report`;

        try {
            const res = await axios(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            console.log(res);
            handleCancel();
            alert("게시물이 신고되었습니다.");
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
                        onClick={myPost ? handleDeletePost : handleReportPost}
                    >
                        {myPost ? "삭제" : "신고"}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default PostAlert;
