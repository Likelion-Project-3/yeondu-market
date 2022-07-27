import "./Modal.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PostAlert from "./PostAlert";

function PostModal() {
    const [cancelAlert, setCancelAlert] = useState(false);
    const AlertCancel = () => {
        setCancelAlert(!cancelAlert);
    }
    return (
        <div className="alertWrap">
            <div className="ModalBtnWrap">
                <button className="ModalBtn" onClick={(AlertCancel)}>
                    삭제
                </button>{cancelAlert && (<PostAlert/>)}
                <Link to="/:post_id/edit" className="ModalBtn">
                    수정
                </Link>
            </div>
        </div>
    );
}
export default PostModal;
