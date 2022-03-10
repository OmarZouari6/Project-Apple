import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editProduct } from '../redux/action';



const EditProduct = ({productEdit}) => {
  const dispatch = useDispatch()
    const customStyles = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      };
      Modal.setAppElement("#root");
      // let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
    
      function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
const [nom, setNom] = useState(productEdit.productName)
const [quantity, setQuantity] = useState(productEdit.quantity)
const [discreption, setDiscreption] = useState(productEdit.discreption)
const [prix, setPrix] = useState(productEdit.prix)
const [image, setImage] = useState(productEdit.image)
    return (
        <div>
            <Button variant="primary" onClick={openModal} type="submit">
                modifier
              </Button>
              <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          className="addForm"
          style={{display:"flex",flexDirection: "column"}}
          onSubmit={(e) => {
            e.preventDefault();
            closeModal()
            dispatch(editProduct({id:productEdit._id,nom,quantity,discreption,image,prix}))
          }}
          >
            <h5>{`EDIT ${nom}`}  </h5>
          <label>Nom du produit:</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
          <label>Photo du produit:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <label>Prix du produit:</label>
          <input
            type="text"
            value={prix}
            onChange={(e) => {
              setPrix(e.target.value);
            }}
          />
          <label>Quantité disponible:</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <label>Détails:</label>
          <textarea
          value={discreption}
          onChange={(e) => {
            setDiscreption(e.target.value);
          }}
          ></textarea>  
          <div className="btnEdit">
            <button type="submit">sauvegarder</button>
            <button onClick={closeModal}>annuler</button>
          </div>
        </form>
      </Modal>
        </div>
    )
}

export default EditProduct
