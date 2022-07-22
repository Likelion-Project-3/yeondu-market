import React, { useState } from "react";
import ProductModal from "../modal/ProductModal";
// import productImg from "../../assets/product-img.svg";
import "./ProductCard.css";
function ProductCard({ product }) {
    // console.log("@@product", product);
    const productImg = `https://mandarin.api.weniv.co.kr/${product.itemImage}`;
    const [isAlertModal, setIsAlertModal] = useState(false);
    const alertOpen = () => {
        setIsAlertModal(!isAlertModal);
        console.log("open");
    };
    return (
        <>
            <button type="button" onClick={alertOpen}>
                <div className="productItem">
                    <img src={productImg} alt="" className="productImg" />
                    <p className="productName">{product.itemName}</p>
                    <p className="productPrice">{product.price}</p>
                </div>
                {isAlertModal && <ProductModal />}
            </button>
        </>
    );
}

export default ProductCard;
