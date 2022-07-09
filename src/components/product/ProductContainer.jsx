import React from "react";
import ProductCard from "./ProductCard";
import "./ProductContainer.css";
function ProductContainer() {
    return (
        <div className="productContainer">
            <h1 className="productOnSale">판매 중인 상품</h1>
            <section className="productSection">
                <ProductCard />
            </section>
        </div>
    );
}

export default ProductContainer;
