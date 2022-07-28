import "./PostComment.css";
import writerImg from "../../assets/icon/Ellipse 4.svg";
import React, { useState } from "react";
import CommentModal from "../modal/CommentModal";

function PostComment({ comment, postId, handleDelete }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleModalOn = () => {
        setIsOpenModal(!isOpenModal);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    return (
        <>
            <div className="postCommentWrap">
                <img
                    src={comment.author.image}
                    alt=""
                    className="commentWriterImg"
                />
                <div className="comment">
                    <strong>{comment.author.username}</strong>
                    <span>5분 전</span>
                    <p>{comment.content}</p>
                </div>
                <button className="showModal" onClick={handleModalOn}>
                    <span className="ir">더보기 버튼</span>
                </button>
            </div>
            {isOpenModal && (
                <CommentModal
                    onClick={handleCloseModal}
                    isOpenModal={isOpenModal}
                    setIsOpenModal={setIsOpenModal}
                    commentAuthorName={comment.author.accountname}
                    commentId={comment.id}
                    postId={postId}
                    handleDelete={handleDelete}
                />
            )}
        </>
    );
}

export default PostComment;
