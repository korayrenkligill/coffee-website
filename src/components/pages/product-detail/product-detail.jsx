//JSON
import productsJson from "../../json/products.json";
//Other
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailHeader from "./sections/header/product-detail-header";
import ProductDetailContent from "./sections/content/product-detail-content";
import { Helmet } from "react-helmet";

function ProductDetail() {
  const { no } = useParams();

  const product = productsJson.products.find((u) => u.no === no);
  return (
    <div className="ProductDetail">
      <Helmet>
        <title>{product.name}</title>
        <meta
          name="keywords"
          content={`coffeact,coffee,coffee shop,cafe,${
            product.name
          },${product.materials.map((material) => {
            return material;
          })}`}
        ></meta>
      </Helmet>
      <ProductDetailHeader name={product.name} />
      <ProductDetailContent product={product} />
    </div>
  );
}

export default ProductDetail;
