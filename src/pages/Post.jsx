import TopBasicNav from "../../components/TopBasicNav";
import PostItem from "../../components/feed/PostItem";
import PostComment from "../../components/feed/PostComment";
import PostCommentInput from "../../components/feed/PostCommentInput";
import "../pages/style/Post.css";

export default function Post() {
    return (
        <>
            <TopBasicNav />
            <div className="postWrap">
                <PostItem />
                {/* 이하 부분은 말풍선 아이콘 클릭시 나오는 부분 */}
                <hr />
                <PostComment />
            </div>
            <PostCommentInput />
        </>
    );
}
