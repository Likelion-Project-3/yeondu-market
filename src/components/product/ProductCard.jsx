import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductModal from "../modal/ProductModal";
import "./ProductCard.css";

function ProductCard({ product }) {
    const accountname = localStorage.getItem("accountname");
    const userAccountName = useParams();
    console.log("accountname", accountname);
    console.log("userAccountName", userAccountName.accountName);
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
                    <>
                        {accountname === userAccountName.accountName ? (
                            <ProductModal
                                productId={product.id}
                                setModal={setModal}
                                onModal={onModal}
                            />
                        ) : (
                            (window.location = "/404")
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default ProductCard;
