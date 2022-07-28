import { Link } from "react-router-dom";
import "./Modal.css";
import LogoutModal from "./LogoutModal";
import { useState } from "react";

function ProfileModal({ setIsOpenModal }) {
    const [onAlert, setOnAlert] = useState(false);
    const AlertOn = () => {
        setOnAlert(!onAlert);
    };
    const handleCancel = () => {
        setOnAlert(false);
        setIsOpenModal(false);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    return (
        <div className="alertWrap" onClick={handleCloseModal}>
            <div className="ModalBtnWrap" onClick={(e) => e.stopPropagation()}>
                <Link to="/" className="ModalBtn">
                    설정 및 개인정보
                </Link>
                <button href="/logout" className="ModalBtn" onClick={AlertOn}>
                    로그아웃
                </button>
                {onAlert && <LogoutModal handleCancel={handleCancel} />}
            </div>
        </div>
    );
}
export default ProfileModal;
