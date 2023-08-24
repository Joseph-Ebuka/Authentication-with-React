import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products..." />
      </div>
      <div>
        <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
        </nav>
        
      </div>
      <Outlet/>
    </>
  );
};

export default Products;
