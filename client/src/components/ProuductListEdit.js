import React from "react";
import ProductCardEdit from "./ProductCardEdit";

const ProuductList = ({ productList }) => {
  return (
    <div className="listeProduit">
      {productList.map((product, i) => (
        <ProductCardEdit product={product} key={i} />
      ))}
    </div>
  );
};

export default ProuductList;
