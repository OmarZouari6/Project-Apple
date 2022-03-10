import { ADD_ITEM, ADD_ORDER, ADD_ORDER_FAIL, ADD_ORDER_SUCCESS, ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, DELETE_ITEM, DELETE_USER, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_PRODUCT, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_CATEGORIE, GET_CATEGORIE_FAIL, GET_CATEGORIE_SUCCESS, GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from "./actionTypes";
import axios from "axios";

export const userSignUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGNUP });
    try {
      const res = await axios.post("/user/signUp", newUser);
      console.log("res", res.data);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const userLogin = (user) => async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      let res = await axios.post("/user/login", user);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const getProfile = () => async (dispatch) => {
    dispatch({
      type: GET_PROFILE,
    });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      },
    };
    try {
      let res = await axios.get("/user/get", config);
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFILE_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const getAllUsers = () => async (dispatch) => {
    dispatch({
      type: GET_USERS,
    });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      },
    };
    try {
      let res = await axios.get("/user/getAllUsers", config);
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const deleteUser = (id) => async (dispatch) => {
    dispatch({
      type: DELETE_USER,
    });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      },
    };
    try {
      let res = await axios.delete(`/user/deleteUser/${id}`, config);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const logOut = () => async (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: null
    });
  };

  export const getProducts = () => async (dispatch) => {
    dispatch({
      type: GET_PRODUCT,
    });
  
    try {
      let res = await axios.get("/product/getProducts");
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const getCategories = () => async (dispatch) => {
    dispatch({
      type: GET_CATEGORIE,
    });
  
    try {
      let res = await axios.get("/categorie/getCategories");
      dispatch({
        type: GET_CATEGORIE_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIE_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    try {
      const res = await axios.post("/product/addProduct",newProduct,config);
      
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const editProduct = (editProduct) => async (dispatch) => {
    dispatch({ type: EDIT_PRODUCT });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    try {
      const res = await axios.put(`/product/editProduct/${editProduct.id}`,editProduct,config);
      
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };

  export const handelAdd=(id,name,image,quantity,prix)=>{
    return{
        type:ADD_ITEM,
        payload:{id,name,image,quantity,prix}
    }
}

  export const handelDelete=(id)=>{
    return{
        type:DELETE_ITEM,
        payload:id
    }
}

export const addOrder = (order) => async (dispatch) => {
  dispatch({ type: ADD_ORDER });
  let token = localStorage.getItem("token");
  let config = {
    headers: {
        Authorization: token,
    }
  };
  try {
    const res = await axios.post("/order/newOrder",order,config);
    console.log(order)
    dispatch({
      type: ADD_ORDER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ORDER_FAIL,
      payload: error.response.data,
    });
  }
};