import TopMenuComponent from "../components/common/TopMenuComponent";
import PostItem from "../components/post/PostItem";
import PostComment from "../components/comment/PostComment";
import PostCommentInput from "../components/comment/PostCommentInput";
import "../pages/style/Post.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
    const token = localStorage.getItem("token");
    const [postData, setPostData] = useState("");
    const { postId } = useParams();

    useEffect(() => {
        const getPostPage = async () => {
            const url = BASE_URL + `/post/${postId}`;

            try {
                const res = await axios(url, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-type": "application/json",
                    },
                });
                setPostData(res.data.post);
            } catch (err) {
                console.log(err);
            }
        };

        getPostPage();
    }, []);
    console.log(postData);

    return (
        <>
            <TopMenuComponent
                topclassName="topBasicNav"
                inputtype="notext"
                rightclassName="moreBtn"
                type="button"
            />
            <h2 className="ir">포스트 아이템</h2>
            <div className="postWrap">
                {!postData ? (
                    <div>loading...</div>
                ) : (
                    <PostItem post={postData} />
                )}
            </div>
            <h2 className="ir">댓글 목록</h2>
            <div className="commentWrap">
                {/* {postData.comment ? <PostComment /> : null} 추후 댓글 불러올 예정*/}
                <PostComment />
            </div>
            <PostCommentInput />
        </>
    );
}
export default Post;
