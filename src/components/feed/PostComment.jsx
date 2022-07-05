import "./PostComment.css";

export default function PostComment() {
    return (
        <div className="postCommentWrap">
            <button className="writerImg"></button>
            <div className="comment">
                <strong>서귀포시 무슨 농장</strong>
                <span>5분 전</span>
                <p>한라봉 언제 먹을 수 있나요?</p>
            </div>
            <button className="showModal"></button>
        </div>
    );
}
