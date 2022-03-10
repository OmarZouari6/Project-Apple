import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { userSignUp } from "../redux/action";
import Nav_bar from "./Nav_bar";


const SinUp = () => {
  const formStyle = { padding: "30px 20px", width: 300, margin: "40px auto" };
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0",
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("user");
  const { loading, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  let handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(userSignUp({userName, email, password, phoneNumber, role}))
    setUserName("")
    setEmail("")
    setPassword("")
    setPhoneNumber("")
    setRole("user")
  }

  return (
    <div>
              <Nav_bar/>
      {loading?<h1>loading ...</h1>:user?<Navigate  to="/login"/>:
      <Form style={formStyle} onSubmit={handelSubmit}>
        <h3>Créer un compte</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nom et Prénom"
            style={inputStyle}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Adresse e-mail"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Mot de passe"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Téléphone mobile"
            style={inputStyle}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ margin: "10px" }}>
          Créer
        </Button>
      </Form>
}
    </div>
  );
};

export default SinUp;
