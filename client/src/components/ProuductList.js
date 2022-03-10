import React from "react";
import ProductCard from "./ProductCard";

const ProuductList = ({ productList }) => {
  return (
    <div className="listeProduit">
      {productList.map((product, i) => (
        <ProductCard product={product} key={i} />
      ))}
    </div>
  );
};

export default ProuductList;
