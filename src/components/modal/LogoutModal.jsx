import { useHistory } from "react-router-dom";
import "./Alert.css";
function Logout() {
    let history = useHistory();
    return (
        <div className="ModalAlert">
            <span className="alertText">로그아웃하시겠어요?</span>
            <div className="wrapAlert">
                <button
                    className="modalAlertBtn cancel"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    취소
                </button>
                <button className="modalAlertBtn delete">로그아웃</button>
            </div>
        </div>
    );
}
export default Logout;
