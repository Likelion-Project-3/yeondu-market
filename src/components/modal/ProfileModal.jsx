import { Link } from "react-router-dom";
import "./Modal.css";
import LogoutModal from "./LogoutModal";
import {useState} from "react"

function ProfileModal() {
    const [onAlert, setOnAlert] = useState(false);
    const AlertOn = () =>{
        setOnAlert(!onAlert);
    }
    return (
        <div className="alertWrap">
            <div className="ModalBtnWrap">
                <Link to="/" className="ModalBtn">
                    설정 및 개인정보
                </Link>
                <button href="/logout" className="ModalBtn" onClick={AlertOn}>
                    로그아웃
                </button>{onAlert && (<LogoutModal/>)}
            </div>
            
        </div>
    );
}
export default ProfileModal;
