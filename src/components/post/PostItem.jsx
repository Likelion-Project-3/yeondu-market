import "./PostItem.css";
import Like from "./Like";
import BasicProfileImg from "../common/BasicProfileImg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PostModal from "../modal/PostModal";

function PostItem({ post }) {
    const [postImg, setPostImg] = useState("");
    const backgroundImage = postImg;
    const pI = post.image;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const ModalOn = () => {
        setIsOpenModal(!isOpenModal);
    };

    useEffect(() => {
        if (post.image !== undefined) {
            // console.log(pI);
            setPostImg(pI.split(",")[0]);
        }
    }, []);

    const showDetail = () => {
        window.location.href = `/post/${post.id}`;
    };

    const formatDate = (date) => {
        const year = date.slice(0, 10).split("-")[0];
        const month = date.slice(0, 10).split("-")[1];
        const day = date.slice(0, 10).split("-")[2];
        return `${year}년 ${month}월 ${day}일`;
    };

    return (
        <article className="postCard">
            <div>
                <div className="postHeaderWrap">
                    <div className="postWriter">
                        <h4 className="ir">포스트 글쓴이</h4>
                        <BasicProfileImg size="sm" src={post.author.image} />
                        <div className="postWriterName">
                            <strong>{post.author.username}</strong>
                            <small>@ {post.author.accountname}</small>
                        </div>
                    </div>
                    <button className="more" onClick={ModalOn}>
                        {isOpenModal && <PostModal />}
                        <span className="ir">더보기 버튼</span>
                    </button>
                </div>
                <div className="postContent">
                    <div className="postClickWrap" onClick={showDetail}>
                        <h4 className="ir">포스트 내용</h4>
                        <p className="postContentText">{post.content}</p>
                        <h4 className="ir">포스트 첨부 이미지</h4>
                        <div className="postContentImg">
                            {post.image
                                ? post.image.split(",").map((src, index) => {
                                      return (
                                          <div className="imgBox" key={index}>
                                              <img
                                                  src={src}
                                                  className="imgSrc"
                                              />
                                          </div>
                                      );
                                  })
                                : null}
                        </div>
                    </div>
                    <div className="btnWrap">
                        <Like heartCount={post.heartCount} />
                        <Link to={`/post/${post.id}`}>
                            <span className="wrapCommentBtn">
                                <button
                                    type="button"
                                    className="commentBtn"
                                ></button>
                                <span className="ir">댓글 개수</span>
                                <span className="commentCount">
                                    {post.commentCount}
                                </span>
                            </span>
                        </Link>
                    </div>

                    <span className="created">
                        {formatDate(post.createdAt)}
                    </span>
                </div>
            </div>
        </article>
    );
}
export default PostItem;
