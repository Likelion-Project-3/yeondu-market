import "./profileModal.css";

function PostModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/postdelete" className="ModalBtn">
                삭제
            </a>
            <a href="/postmodify" className="ModalBtn">
                수정
            </a>
        </div>
    );
}
export default PostModal;