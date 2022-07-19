import React from "react";
import ProductCard from "./ProductCard";
import "./ProductContainer.css";
function ProductContainer({ productList }) {
    console.log("!!!product", productList);
    const product = productList.product;
    return (
        <div className="productContainer">
            <h1 className="productOnSale">판매 중인 상품</h1>
            <section className="productSection">
                {product && product.length > 0
                    ? product.map((product, id) => {
                          return (
                              <div key={id}>
                                  <ProductCard product={product} />
                              </div>
                          );
                      })
                    : null}
            </section>
        </div>
    );
}

export default ProductContainer;
