import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="aProduct">
      <Card sx={{ width: 300,height:318 }}>
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
                {`${product.productName.substring(0, 30)}`}
              </Typography>
            </Link>
            <Typography gutterBottom variant="h5" component="div">
                {`${product.prix} $`}
              </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ProductCard;
