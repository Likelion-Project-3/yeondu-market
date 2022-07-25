import React, { useState } from "react";
import ProductModal from "../modal/ProductModal";
import "./ProductCard.css";

function ProductCard({ product }) {
    const [onModal, setModal] = useState(false);
    const ModalOpen = () => {
        setModal(!onModal);
    };

    const replacePrice = product.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <>
            <div type="button">
                <div className="productItem" onClick={ModalOpen}>
                    <img
                        src={product.itemImage}
                        alt="상품사진"
                        className="productImg"
                    />
                    <p className="productName">{product.itemName}</p>
                    <p className="productPrice">{replacePrice}원</p>
                </div>
                {onModal && (
                    <ProductModal
                        productId={product.id}
                        setModal={setModal}
                        onModal={onModal}
                    />
                )}
            </div>
        </>
    );
}

export default ProductCard;
