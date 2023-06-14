import "./LeaveChatModal.css";

function LeaveChatModal({ setIsOpenModal }) {
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    return (
        <div className="alertWrap" onClick={handleCloseModal}>
            <div className="leaveChatModal">
                <button>채팅방 나가기</button>
            </div>
        </div>
    );
}

export default LeaveChatModal;
