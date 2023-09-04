//CSS
import "./product-detail-content.css";
//Other
import React from "react";
import { Link } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { ImPriceTag } from "react-icons/im";

function ProductDetailContent({ product }) {
  return (
    <div className="ProductDetailContent">
      <div className="product-detail-links">
        <Link to="/">coffeact</Link>
        <span> / </span>
        <Link to="/menu/all">menu</Link>
        <span> / </span>
        <Link to={`/menu/${product.category}`}>{product.category}</Link>
        <span> / </span>
        <Link to={`/menu/products/${product.name}/${product.no}`}>
          {product.name}
        </Link>
      </div>
      <div className="product-detail-container">
        <div className="product-detail-container-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-container-texts">
          <h3>Preparation</h3>
          <p className="product-detail-preparation">{product.preparation}</p>
          <h3>Materials</h3>
          <ul>
            {product.materials.map((text, key) => {
              return (
                <li key={key} className="product-detail-material">
                  {text}
                </li>
              );
            })}
          </ul>
          <h3>Values</h3>
          <div className="product-detail-values">
            <p>
              <span>calorie value: </span>
              {product.calorie_value}
            </p>
            <p>
              <span>fat value: </span>
              {product.calorie_value}
            </p>
            <p>
              <span>protein value: </span>
              {product.calorie_value}
            </p>
          </div>
          <div className="product-detail-time-price">
            <p>
              <span>
                <AiFillClockCircle className="icon" />
              </span>
              {product.order_time}
            </p>
            <p>
              <span>
                <ImPriceTag className="icon" />
              </span>
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailContent;
