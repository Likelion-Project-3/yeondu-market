import "./Modal.css";
import { Link } from "react-router-dom";

function PostModal() {
    return (
        <div className="alertWrap">
            <div className="ModalBtnWrap">
                <a href="/postdelete" className="ModalBtn">
                    삭제
                </a>
                <Link to="/:post_id/edit" className="ModalBtn">
                    수정
                </Link>
            </div>
        </div>
    );
}
export default PostModal;
