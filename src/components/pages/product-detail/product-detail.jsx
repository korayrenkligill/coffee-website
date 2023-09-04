//JSON
import productsJson from "../../json/products.json";
//Other
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailHeader from "./sections/header/product-detail-header";
import ProductDetailContent from "./sections/content/product-detail-content";

function ProductDetail() {
  const { no } = useParams();

  const product = productsJson.products.find((u) => u.no === no);
  return (
    <div className="ProductDetail">
      <ProductDetailHeader name={product.name} />
      <ProductDetailContent product={product} />
    </div>
  );
}

export default ProductDetail;
