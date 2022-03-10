import {
  ADD_ITEM,
  ADD_ORDER_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  DELETE_ITEM,
  DELETE_USER,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_CATEGORIE,
  GET_CATEGORIE_FAIL,
  GET_CATEGORIE_SUCCESS,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_USERS,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "./actionTypes";

const init = {
  allUsers: null,
  user: null,
  product: null,
  shoppingCart:null,
  order:null,
  Categories:["Mac","Iphone","Ipad","Apple Watch", "AirPods", "accesoires"],
  errors: null,
  loading: false,
  isAuth: false,
  token: localStorage.getItem("token"),
};
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case LOGIN:
    case GET_PROFILE:
    case ADD_PRODUCT:
    case EDIT_PRODUCT:
    case GET_PRODUCT:
    case GET_USERS:
    case DELETE_USER:
    case GET_CATEGORIE:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case GET_PROFILE_FAIL:
    case ADD_PRODUCT_FAIL:
    case EDIT_PRODUCT_FAIL:
    case GET_PRODUCT_FAIL:
    case GET_USERS_FAIL:
    case DELETE_USER_FAIL:
    case GET_CATEGORIE_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        errors: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.thisUser,
        loading: false,
        errors: null,
        isAuth: true,
        token: payload.token,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        errors: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: state.allUsers.filter((el) => el._id !== payload),
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: payload,
        errors: null,
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: payload,
        errors: null,
        isAuth: false,
        token: null,
        allUsers: null, 
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: payload,
        loading: false,
        errors: null,
      };

    case GET_CATEGORIE_SUCCESS:
      return {
        ...state,
        categories: payload,
        loading: false,
        errors: null,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: [...state.product, payload],
        loading: false,
        errors: null,
      };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        product: state.product.map((el)=>(

          el._id===payload._id?{...el,
            productName:payload.productName,
            quantity:payload.quantity,
            discreption:payload.discreption,
            prix:payload.prix,
            image:payload.image
          }:el
        )
        ),
        loading: false,
        errors: null,
      };

    case ADD_ITEM:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart,{id:payload.id,
          name:payload.name,
          image:payload.image,
          quantity:payload.quantity,
          prix:payload.prix} ],
      };

      case DELETE_ITEM :
            
            return{
            ...state, shoppingCart: state.shoppingCart.filter(el=>el.id!==payload)
            };
      case ADD_ORDER_SUCCESS :
            
            return{
            ...state, order: payload
            };

    default:
      return state;
  }
};
