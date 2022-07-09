import React from "react";
import productImg from "../../assets/product-img.svg";
import "./ProductCard.css";
function ProductCard() {
    return (
        <div className="productItem">
            <img src={productImg} alt="" className="productImg" />
            <p className="productName">애월읍 노지 감귤</p>
            <p className="productPrice">35,000원</p>
        </div>
    );
}

export default ProductCard;
