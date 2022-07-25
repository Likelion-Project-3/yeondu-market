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

    return (
        <article className="postCard">
            <div>
                <div className="postHeaderWrap">
                    <div className="postWriter">
                        <BasicProfileImg size="sm" src={post.author.image} />
                        <div className="postWriterName">
                            <strong>{post.author.username}</strong>
                            <small>@ {post.author.accountname}</small>
                        </div>
                    </div>
                    <button className="more"></button>
                </div>
                <div className="postContent">
                    <p className="postContentText">{post.content}</p>
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
                    <div className="btnWrap">
                        <Like heartCount={post.heartCount} />
                        <Link to={`/post/${post.id}`}>
                            <span className="wrapCommentBtn">
                                <button
                                    type="button"
                                    className="commentBtn"
                                ></button>
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
