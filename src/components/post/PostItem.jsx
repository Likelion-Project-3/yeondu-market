import "./PostItem.css";
import Like from "./Like";
import BasicProfileImg from "../common/BasicProfileImg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function PostItem({ post }) {
    const [postImg, setPostImg] = useState("");
    const backgroundImage = postImg;
    const pI = post.image;

    useEffect(() => {
        if (post.image !== undefined) {
            // console.log(pI);
            setPostImg(pI.split(",")[0]);
        }
    }, []);

    const showDetail = () => {
        window.location.href = `/post/${post.id}`;
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
                    <button className="more">
                        <span className="ir">더보기 버튼</span>
                    </button>
                </div>
                <div className="postContent">
                    <div className="postClickWrap" onClick={showDetail}>
                        <h4 className="ir">포스트 내용</h4>
                        <p className="postContentText">{post.content}</p>
                        <h4 className="ir">포스트 첨부 이미지</h4>
                        <div
                            className="postContentImg"
                            // style={{
                            //     background: `url(${backgroundImage}) no-repeat`,
                            // }}
                        >
                            {post.image ? (
                                <img src={backgroundImage} alt="" />
                            ) : null}
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

                    <span className="created">{post.createdAt}</span>
                </div>
            </div>
        </article>
    );
}
export default PostItem;
