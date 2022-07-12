import "./PostComment.css";
import writerImg from "../../assets/icon/Ellipse 4.svg";

function PostComment() {
    return (
        <div className="postCommentWrap">
            <img src={writerImg} alt="" />
            <div className="comment">
                <strong>서귀포시 무슨 농장</strong>
                <span>5분 전</span>
                <p>한라봉 언제 먹을 수 있나요?</p>
            </div>
            <button className="showModal"></button>
        </div>
    );
}

export default PostComment;