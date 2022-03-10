import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { userLogin} from "../redux/action";
import Nav_bar from "./Nav_bar";
import { Link } from 'react-router-dom';


const Login = () => {
  const formStyle = { padding: "30px 20px", width: 300, margin: "40px auto  0 auto" };
  const inputStyle = {
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  let handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(userLogin({ email, password}))
    setEmail("")
    setPassword("")
  }

  return (
    <div>
                    <Nav_bar/>

      {
      loading?<h1>loading ...</h1>:localStorage.getItem("token")?<Navigate to="/profile"/>:
      <Form style={formStyle} 
      onSubmit={handelSubmit}
      >
        <h3>Se connecter</h3>
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
        <Button variant="primary" type="submit" style={{ margin: "10px 0 0 0" }}>
        Se connecter
        </Button>
      </Form>
}
<Link to="/signUp">
        <Button variant="primary" type="submit" style={{ margin: "0px" }} >
          Créer un compte
        </Button>
        </Link>
    </div>
  );
};

export default Login;
