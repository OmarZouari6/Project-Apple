import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav_bar from "./Nav_bar";
import Button from "@mui/material/Button";
import { addOrder, handelDelete } from "../redux/action";


const ShoppingCart = () => {
  const { shoppingCart } = useSelector((state) => state);
  
  let order = shoppingCart;
  const dispatch = useDispatch();
  
  let total = 0;

  console.log(total);
  return (
    <div>
      <Nav_bar />
      {!shoppingCart||shoppingCart.length===0 ? (
        <h5>votre panier est vide</h5>
      ) : (
        <table>
          <thead>
            <tr>
              <td style={{ width: "720px" }}>
                <h4>ARTICLE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>QUANTITÉ</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>PRIX UNITAIRE</h4>
              </td>
              <td style={{ width: "220px" }}>
                <h4>SOUS-TOTAL</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            {shoppingCart.map((el) => (
              <tr>
                {" "}
                <td style={{ display: "flex", textAlign: "left" }}>
                  <img
                    style={{ width: "120px", height: "120px" }}
                    className=""
                    src={el.image}
                    alt=""
                  />
                  <div>
                    <p className="name">{el.name}</p>
                    <Button
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(handelDelete(el.id));
                      }}
                    >
                      supprimer
                    </Button>
                  </div>
                </td>
                <td>
                  {" "}
                  <p>{Number(el.quantity)}</p>
                
               
                </td>
                <td>
                  {" "}
                  <p>{Number(el.prix)}</p>
                </td>
                <td>
                  <p>{Number(el.prix) * Number(el.quantity)}</p>
                </td>
              </tr>
            ))}
            <tr>
              {shoppingCart
                .map((el) => Number(el.prix) * Number(el.quantity))
                .forEach((sousTotal) => (total += sousTotal))}
              <td></td>
              <td></td>
              <td>
                <h4>TOTAL:</h4>
              </td>
              <td>
                <h4>{`${total} $`}</h4>
              </td>
            </tr>
          </tbody>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              dispatch(addOrder({ order }));
            }}
          >
            confirmer
          </Button>
        </table>
      )}
    </div>
  );
};

export default ShoppingCart;
