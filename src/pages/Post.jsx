import TopMenuComponent from "../components/common/TopMenuComponent";
import PostItem from "../components/post/PostItem";
import PostComment from "../components/comment/PostComment";
import PostCommentInput from "../components/comment/PostCommentInput";
import "../pages/style/Post.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
    const token = localStorage.getItem("token");
    const [postData, setPostData] = useState("");
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    // 댓글 업데이트 반영하기
    const getComments = useCallback(async () => {
        const url = BASE_URL + `/post/${postId}/comments`;

        try {
            const res = await axios(url, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            setComments(res.data.comments.reverse());
        } catch (err) {
            console.log(err);
        }
    }, [comments]);

    // 기존 게시글 정보 가져오기
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
        getComments();
    }, []);

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
                {comments.length > 0
                    ? comments.map((comment, index) => {
                          return <PostComment comment={comment} key={index} />;
                      })
                    : null}
            </div>
            <PostCommentInput postId={postId} handleSubmit={getComments} />
        </>
    );
}
export default Post;
