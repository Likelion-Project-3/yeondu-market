import "./Post.css";
import Like from "../Like";
import BasicProfileImg from "../BasicProfileImg";

export default function Post() {
    return (
        <article className="postCard">
            <div className="postHeaderWrap">
                <div className="postWriter">
                    <BasicProfileImg size="sm" />
                    <div className="postWriterName">
                        <strong>애월읍 위니브 감귤농장</strong>
                        <small>@ weniv_Mandarin</small>
                    </div>
                </div>
                <button className="more"></button>
            </div>
            <div className="postContent">
                <p className="postContentText">
                    옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
                    뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고,
                    못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                </p>
                <div className="postContentImg"></div>

                <div className="btnWrap">
                    <Like />
                    <button type="button" className="commentBtn"></button>
                    <span className="commentCount">12</span>
                </div>
                <span className="created">2020년 10월 21일</span>
            </div>
        </article>
    );
}
