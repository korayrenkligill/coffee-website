//CSS
import "./content.css";
//JSON
import productsJson from "../../../../json/products.json";
//Other
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

function Content({ category }) {
  const navigation = useNavigate();
  const products = productsJson.products;

  let categorizedProducts = [];
  if (category !== "all") {
    categorizedProducts = products.filter(
      (product) => product.category === category
    );
  } else {
    categorizedProducts = products;
  }
  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = categorizedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(categorizedProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  return (
    <div className="MenuPcContent">
      <div className="menu-filter">
        <div className="menu-filter-mobile">
          <h2>Filter</h2>
          <button
            onClick={() => {
              setFilterIsOpen(!filterIsOpen);
            }}
          >
            <BiMenu />
          </button>
        </div>
        <div className={`menu-filter-links ${filterIsOpen ? "open" : "close"}`}>
          <NavLink
            to={"/menu/all"}
            onClick={() => {
              setFilterIsOpen(false);
              paginate(1);
            }}
          >
            All Coffees
          </NavLink>
          <NavLink
            to={"/menu/hot-coffees"}
            onClick={() => {
              setFilterIsOpen(false);
              paginate(1);
            }}
          >
            Hot Coffees
          </NavLink>
          <NavLink
            to={"/menu/cold-coffees"}
            onClick={() => {
              setFilterIsOpen(false);
              paginate(1);
            }}
          >
            Cold Coffees
          </NavLink>
          <NavLink
            to={"/menu/milky-drinks"}
            onClick={() => {
              setFilterIsOpen(false);
              paginate(1);
            }}
          >
            Milky Drinks
          </NavLink>
          <NavLink
            to={"/menu/snacks"}
            onClick={() => {
              setFilterIsOpen(false);
              paginate(1);
            }}
          >
            Snacks
          </NavLink>
        </div>
      </div>
      <div className="menu-products">
        {currentProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="product"
              onClick={() => {
                navigation(`/menu/products/${item.name}/${item.no}`);
              }}
            >
              <div className="product-image">
                <img src={item.image} alt={item.name} />
                <p className="product-order-time">
                  <AiOutlineClockCircle className="icon" /> {item.order_time}
                </p>
              </div>
              <div className="product-texts">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                </div>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="menu-page-number">
        {pageNumbers.map((pageNumber) => (
          <button
            className={currentPage === pageNumber ? "active" : "deactive"}
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Content;
