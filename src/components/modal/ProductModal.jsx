import "./profileModal.css";

export default function ProductModal() {
    return (
        <div className="ModalBtnWrap">
            <a href="/productdelete" className="ModalBtn">
                삭제
            </a>
            <a href="/productmodify" className="ModalBtn">
                수정
            </a>
            <a href="/modify" className="ModalBtn">
                웹사이트에서 상품보기
            </a>
        </div>
    );
}
