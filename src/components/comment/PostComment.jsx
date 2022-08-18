import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CommentModal from "../modal/CommentModal";
import { UserContext } from "../../context/UserContext";
import "./PostComment.css";

function PostComment({ comment, postId, handleDelete }) {
    const { accountname } = useContext(UserContext);
    const path =
        accountname === comment.author.accountname
            ? `/myprofile/${accountname}`
            : `/profile/${comment.author.accountname}`;
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleModalOn = () => {
        setIsOpenModal(!isOpenModal);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const getTimeGap = (time) => {
        const ms = Date.parse(time);
        const now = Date.now();
        const gap = (now - ms) / 1000;
        if (gap < 60) {
            return "방금 전";
        } else if (gap < 3600) {
            return `${Math.floor(gap / 60)}분 전`;
        } else if (gap < 86400) {
            return `${Math.floor(gap / 3600)}시간 전`;
        } else if (gap < 2592000) {
            return `${Math.floor(gap / 86400)}일 전`;
        } else {
            return `${Math.floor(gap / 2592000)}달 전`;
        }
    };

    return (
        <>
            <div className="postCommentWrap">
                <Link to={path}>
                    <img
                        src={comment.author.image}
                        alt=""
                        className="commentWriterImg"
                    />
                </Link>
                <div className="comment">
                    <Link to={path}>
                        <strong>{comment.author.username}</strong>
                    </Link>
                    <span>{getTimeGap(comment.createdAt)}</span>
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
