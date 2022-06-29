import { Link } from "react-router-dom";
import Logout from "./Logout";
import "./profileModal.css";

export default function ProfileModal() {
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
