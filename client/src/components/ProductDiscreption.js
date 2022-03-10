import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Nav_bar from './Nav_bar'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { handelAdd } from '../redux/action';


const ProductDiscreption = ({match}) => {
    const { product } = useSelector((state) => state);
    let params = useParams();
    const dispatch = useDispatch()
    let aProduct = product.find((el) => el._id == params.id);
    const [quantity, setQuantity] = useState('')


// get a random product
let randomProduct =[]
for (var i=0;i<5;i++){
  randomProduct.push(product[Math.floor(Math.random()*product.length)]) 
}
console.log(randomProduct)



    return (
        <div>
            <Nav_bar />
            <div className='detail'>
            <img
                    style={{ width: "200px", height: "200px"  }}
                    className="prod"
                    src={aProduct.image}
                    alt=""
                  />
            <h3>{aProduct.productName}</h3>
            <h5>{`${aProduct.prix} $`}</h5>
            <p className="disc">{aProduct.discreption}</p>
            
            </div>
            <TextField
          id="standard-basic"
          sx={{ width: 300 }}
          label="quantité"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <div>            
          <Button variant="contained"
            onClick={(e) => {
                e.preventDefault();
                dispatch(handelAdd(aProduct._id,aProduct.productName,aProduct.image,quantity,aProduct.prix))
                console.log("produit",aProduct)
              }}
            >ajouter au panier</Button></div>

        </div>
    )
}

export default ProductDiscreption
