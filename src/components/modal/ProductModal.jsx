import { useEffect, useState } from "react";
import ProductAlert from "./ProductAlert";
import "./Modal.css";

function ProductModal({ productId, setModal, onModal }) {
    const [onAlert, setOnAlert] = useState(false);
    const AlertOpen = () => {
        setOnAlert(!onAlert);
    };
    const handleCancel = () => {
        setOnAlert(false);
        setModal(false);
    };
    const handleCloseModal = () => {
        setModal(false);
    };

    return (
        <>
            <div className="alertWrap" onClick={handleCloseModal}>
                <div
                    className="ModalBtnWrap"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div type="button" className="ModalBtn" onClick={AlertOpen}>
                        삭제
                    </div>
                    <a href="/productmodify" className="ModalBtn">
                        수정
                    </a>
                    <a href="/modify" className="ModalBtn">
                        웹사이트에서 상품보기
                    </a>
                </div>
            </div>
            {onAlert && (
                <>
                    <ProductAlert
                        productId={productId}
                        handleCancel={handleCancel}
                    />
                </>
            )}
        </>
    );
}
export default ProductModal;
