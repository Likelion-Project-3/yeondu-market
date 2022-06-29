import "./modalAlert.css";
export default function Logout() {
    return (
        <div className="ModalAlert">
            <span className="alertText">로그아웃하시겠어요?</span>
            <div className="wrapAlert">
                <button className="modalAlertBtn cancel">취소</button>
                <button className="modalAlertBtn delete">로그아웃</button>
            </div>
        </div>
    );
}
