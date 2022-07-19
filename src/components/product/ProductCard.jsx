import React from "react";
// import productImg from "../../assets/product-img.svg";
import "./ProductCard.css";
function ProductCard({ product }) {
    console.log("@@product", product);
    const productImg = `https://mandarin.api.weniv.co.kr/${product.itemImage}`;
    return (
        <div className="productItem">
            <img src={productImg} alt="" className="productImg" />
            <p className="productName">{product.itemName}</p>
            <p className="productPrice">{product.price}</p>
        </div>
    );
}

export default ProductCard;
