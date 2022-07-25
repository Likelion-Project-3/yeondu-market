import "./PostComment.css";
import writerImg from "../../assets/icon/Ellipse 4.svg";
import React, { useState } from "react";
import { ReportCommentModal } from "../modal/CommentModal";

function PostComment() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenModal(true);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    return (
        <>
            <div className="postCommentWrap">
                <img src={writerImg} alt="" />
                <div className="comment">
                    <strong>서귀포시 무슨 농장</strong>
                    <span>5분 전</span>
                    <p>한라봉 언제 먹을 수 있나요?</p>
                </div>
                <button className="showModal" onClick={handleOpenModal}>
                    <span className="ir">더보기 버튼</span>
                </button>
            </div>
            {isOpenModal && <ReportCommentModal onClick={handleCloseModal} />}
        </>
    );
}

export default PostComment;
