import { useHistory } from "react-router-dom";
import "./modalAlert.css";
export default function PostAlert() {
    let history = useHistory();
    return (
        <div className="ModalAlert">
            <span className="alertText">게시글을 삭제할까요?</span>
            <div className="wrapAlert">
                <button
                    className="modalAlertBtn cancel"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    취소
                </button>
                <button className="modalAlertBtn delete">삭제</button>
            </div>
        </div>
    );
}