import "./Modal.css";

function ProfileModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/" className="ModalBtn">
                설정 및 개인정보
            </a>
            <a href="/logout" className="ModalBtn">
                로그아웃
            </a>
        </div>
    );
}
export default ProfileModal;
