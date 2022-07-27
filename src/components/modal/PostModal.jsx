import "./Modal.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostAlert from "./PostAlert";

function PostModal({ setIsOpenModal, isOpenModal }) {
    const [cancelAlert, setCancelAlert] = useState(false);
    const AlertCancel = () => {
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
                <div
                    className="ModalBtnWrap"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="ModalBtn" onClick={AlertCancel}>
                        삭제
                    </button>

                    <Link to="/:post_id/edit" className="ModalBtn">
                        수정
                    </Link>
                </div>
            </div>
            {cancelAlert && <PostAlert handleCancel={handleCancel} />}
        </>
    );
}
export default PostModal;
