import React from "react";
import ProductCard from "./ProductCard";
import "./ProductContainer.css";

function ProductContainer({ productList }) {
    const product = productList.product;

    return (
        <div className="productContainer">
            {product && product.length > 0 ? (
                <h1 className="productOnSale">판매 중인 상품</h1>
            ) : null}
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
