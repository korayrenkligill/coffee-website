import React from "react";
import MenuHeader from "./sections/header/menu-header";
import { useParams } from "react-router-dom";
import Content from "./sections/content/content";

function Menu() {
  const { category } = useParams();
  return (
    <div className="Menu">
      <MenuHeader />
      <Content category={category} />
    </div>
  );
}

export default Menu;
