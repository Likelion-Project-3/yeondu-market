import { useHistory } from "react-router-dom";
import "./Alert.css";
function ProductAlert({ handleCancel }) {
    return (
        <div className="alertWrap">
            <div className="ModalAlert">
                <span className="alertText">상품을 삭제할까요?</span>
                <div className="wrapAlert">
                    <button
                        className="modalAlertBtn cancel"
                        onClick={handleCancel}
                    >
                        취소
                    </button>
                    <button className="modalAlertBtn delete">삭제</button>
                </div>
            </div>
        </div>
    );
}
export default ProductAlert;
