import { BASE_URL } from "../constants/baseUrl";
import axios from "axios";
import "./Modal.css";

function CommentModal({
    setIsOpenModal,
    commentAuthorName,
    commentId,
    postId,
    handleDelete,
}) {
    const accountname = localStorage.getItem("accountname");
    const token = localStorage.getItem("token");

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const handleComment = async () => {
        // 댓글 삭제 기능
        if (commentAuthorName === accountname) {
            const url = BASE_URL + `/post/${postId}/comments/${commentId}`;

            try {
                const res = await axios(url, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                console.log(res.data);
                handleDelete();
            } catch (err) {
                console.log(err);
            }
        }

        // 댓글 신고 기능
        if (commentAuthorName !== accountname) {
            const url =
                BASE_URL + `/post/${postId}/comments/${commentId}/report`;

            try {
                const res = await axios(url, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                console.log(res.data);
                alert("댓글이 신고되었습니다.");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="alertWrap" onClick={handleCloseModal}>
            <div className="ModalBtnWrap">
                <button className="ModalBtn" onClick={handleComment}>
                    {commentAuthorName === accountname ? "삭제" : "신고"}
                </button>
            </div>
        </div>
    );
}

export default CommentModal;
