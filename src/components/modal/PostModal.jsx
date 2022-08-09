import { useState } from "react";
import { Link } from "react-router-dom";
import PostAlert from "./PostAlert";
import "./Modal.css";

function PostModal({ postId, setIsOpenModal, postAuthor }) {
    const [cancelAlert, setCancelAlert] = useState(false);
    const accountname = localStorage.getItem("accountname");
    const myPost = accountname === postAuthor ? true : false;

    const handleCancelAlert = () => {
        setCancelAlert(!cancelAlert);
    };
    const handleCancel = () => {
        setCancelAlert(false);
        setIsOpenModal(false);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <>
            <div className="alertWrap" onClick={handleCloseModal}>
                {accountname === postAuthor ? (
                    <div
                        className="ModalBtnWrap"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="ModalBtn"
                            onClick={handleCancelAlert}
                        >
                            삭제
                        </button>

                        <Link to={`/post/${postId}/edit`} className="ModalBtn">
                            수정
                        </Link>
                    </div>
                ) : (
                    <div
                        className="ModalBtnWrap"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="ModalBtn"
                            onClick={handleCancelAlert}
                        >
                            신고
                        </button>
                    </div>
                )}
            </div>
            {cancelAlert && (
                <PostAlert
                    handleCancel={handleCancel}
                    postId={postId}
                    myPost={myPost}
                />
            )}
        </>
    );
}
export default PostModal;
