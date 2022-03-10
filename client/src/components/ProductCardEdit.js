import React from "react";
import {
  Card,
  CardActionArea,

  CardContent,

  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const {  user} = useSelector((state) => state);
  return (
    <div className="aProduct">
      <Card sx={{  width: 300,height:318 }}>
        <CardActionArea>
          <img
                    style={{ width: "160px", height: "160px" }}
                    className="omar"
                    src={product.image}
                    alt=""
                  />
          <CardContent>
            <Link to={`/discreption/${product._id}`}>
              <Typography gutterBottom variant="h5" component="div">
                {product.productName}
              </Typography>
            </Link>
          </CardContent>
          {
user.role === "admin"?<EditProduct productEdit={product} />:<></>
          }
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
