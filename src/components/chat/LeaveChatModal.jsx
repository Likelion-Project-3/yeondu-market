import { useNavigate } from "react";
import "./LeaveChatModal.css";

function LeaveChatModal() {
    return (
        <div className="alertWrap">
            <div className="leaveChatModal">
                <button>채팅방 나가기</button>
            </div>
        </div>
    );
}

export default LeaveChatModal;