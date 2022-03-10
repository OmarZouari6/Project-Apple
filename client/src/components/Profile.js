import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getProfile, logOut } from "../redux/action";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router";
import Nav_bar from "./Nav_bar";
import AddProduct from "./AddProduct";
import GetUsers from "./GetUsers";
import { Link } from "react-router-dom";
import ProuductListEdit from "./ProuductListEdit";

const Profile = () => {
  const { loading, user, product } = useSelector((state) => state);
  useEffect(() => {
    if (user.role === "admin") {
      dispatch(getAllUsers());
    }
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(logOut());
    localStorage.removeItem("token");
  };
  return (
    <div>
      <Nav_bar />
      {loading ? (
        <h1>loading ...</h1>
      ) : user === null ? (
        <Navigate to="/login" />
      ) : (
        <div>
          <h1>{`welcome ${user.userName}`} </h1>
          <Link to="/login">
            <Button
              variant="primary"
              type="submit"
              onClick={handelSubmit}
              style={{ margin: "10px" }}
            >
              logOut
            </Button>
          </Link>
          {user.role === "admin"  ? (
            <Link to="/addProuduct">
              <Button variant="primary" type="submit">
                Ajouter un produit
              </Button>
            </Link>
          ) : (
            <></>
          )}
          {user.role === "admin" ? (<div>

            <Link to="/getUsers">
              <Button variant="primary" type="submit">
                listes D'utilisateur
              </Button>
            </Link>
            <ProuductListEdit productList={product} />
          </div>
          ) : (
            <></>
          )}
        </div>
      )}
      
    </div>
  );
};

export default Profile;
