import "./PostItem.css";
import Like from "./Like";
import BasicProfileImg from "../common/BasicProfileImg";
import { useEffect, useState } from "react";

function PostItem({ post }) {
    const [postImg, setPostImg] = useState("");
    const backgroundImage = `https://mandarin.api.weniv.co.kr/${postImg}`;
    const pI = post.image;

    useEffect(() => {
        if (post.image !== undefined) {
            console.log(pI);
            // console.log(pI.includes(","));
            console.log("##", pI.split(",")[0]);
            setPostImg(pI.split(",")[0]);
        }
    }, []);
    console.log(postImg);
    // const str = "1657978440543.jpg, 1657978444277.jpg";
    // console.log("##", postImg.split(","));
    // console.log("##", postImg.split(",")[0]);

    console.log("!!", post);
    return (
        <article className="postCard">
            <div>
                <div className="postHeaderWrap">
                    <div className="postWriter">
                        <BasicProfileImg size="sm" />
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
                        <button type="button" className="commentBtn"></button>
                        <span className="commentCount">
                            {post.commentCount}
                        </span>
                    </div>
                    <span className="created">{post.createdAt}</span>
                </div>
            </div>
        </article>
    );
}
export default PostItem;
