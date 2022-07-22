import React, { useState } from "react";
import ProductAlert from "../modal/ProductAlert";
import ProductModal from "../modal/ProductModal";
// import productImg from "../../assets/product-img.svg";
import "./ProductCard.css";
function ProductCard({ product }) {
    // console.log("@@product", product);
    const productImg = `https://mandarin.api.weniv.co.kr/${product.itemImage}`;
    // const [onModal, setOnModal] = useState(false);
    // function handleModal() {
    //     setOnModal(!onModal);
    // }
    // function openModal() {
    //     setOnModal(true);
    // }
    const [onModal, setModal] = useState(false);
    const ModalOpen = () => {
        setModal(!onModal);
        // console.log("open");
    };

    // console.log("isAlertModal", onModal);
    return (
        <>
            <div type="button">
                <div className="productItem" onClick={ModalOpen}>
                    <img
                        src={productImg}
                        alt="상품사진"
                        className="productImg"
                    />
                    <p className="productName">{product.itemName}</p>
                    <p className="productPrice">{product.price}</p>
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
