import "./Alert.css";

function Logout({ handleCancel }) {
    const handleLogout = () => {
        localStorage.clear();
        window.location = "/";
    };
    return (
        <div className="alertWrap">
            <div className="ModalAlert">
                <span className="alertText">로그아웃하시겠어요?</span>
                <div className="wrapAlert">
                    <button
                        className="modalAlertBtn cancel"
                        onClick={handleCancel}
                    >
                        취소
                    </button>
                    <button
                        className="modalAlertBtn delete"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Logout;
