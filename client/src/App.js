import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import GetUsers from "./components/GetUsers";
import ProductDiscreption from "./components/ProductDiscreption";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/profile" element={<Profile />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signUp" element={<Signup />} />
        <Route  path="/addProuduct" element={<AddProduct/>} />
        <Route  path="/getUsers" element={<GetUsers/>} />
        <Route path="/discreption/:id" element={<ProductDiscreption/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
        
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
