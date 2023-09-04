//CSS
import "./product-detail-header.css";
//Other
import React from "react";
function ProductDetailHeader({ name }) {
  return (
    <div className="ProductDetailHeader">
      <div className="product-detail-header-container">
        <h1 className="product-detail-header-title">{name}</h1>
      </div>
    </div>
  );
}

export default ProductDetailHeader;
