import TopMenuComponent from "../components/common/TopMenuComponent";
import PostItem from "../components/post/PostItem";
import PostComment from "../components/comment/PostComment";
import PostCommentInput from "../components/comment/PostCommentInput";
import "../pages/style/Post.css";
import { BASE_URL } from "../components/constants/baseUrl";
import { useEffect, useState } from "react";
import axios from "axios";

function Post(props) {
    const token = localStorage.getItem("token");
    const postId = props.postId;
    // const postId = "62d76d4c17ae666581792572";
    // const postId = "62d79d3117ae6665817b94ce";
    const [postData, setPostData] = useState("");

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
                console.log(postData);
            } catch (err) {
                console.log(err);
            }
        };

        getPostPage();
    }, []);

    return (
        <>
            <TopMenuComponent
                topclassName="topBasicNav"
                inputtype="notext"
                rightclassName="moreBtn"
                type="button"
            />
            <div className="postWrap">
                <PostItem post={postData} />
                <hr />
                <PostComment />
            </div>
            <PostCommentInput />
        </>
    );
}
export default Post;
