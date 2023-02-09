import {createContext,useReducer,useContext,useEffect} from "react"
import reducer from "../reducer/cart_reducer"

const CartContext =createContext();

const getLocalCartData = () =>{
    let CartData = localStorage.getItem("shopifyCART");
    // if(CartData === []){
    //     return [];
    // } else{
    //     return JSON.parse(CartData)
    // }
    const parseData = JSON.parse(CartData);
    if(!Array.isArray(parseData))
    return [];
    return parseData;
}

const intialState = {
    //cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000,
}

const CartProvider  = ({children}) => {
const [state,dispatch] =useReducer(reducer,intialState);



const addToCart= (id,amount,product) =>{
    dispatch({type:"ADD_TO_CART" ,payload:{id,amount,product}});
}

//increament and decrement the product

const setDecrease = (id) =>{
    dispatch({type:"SET_DECREMENT",payload:id})

}
const setIncrease = (id) =>{
    dispatch({type:"SET_INCREMENT",payload:id})

}
const removeItem = (id) =>{
    dispatch ({ type:"REMOVE_ITEM",payload:id})
}

//to add data in local storage
useEffect(() =>{
    //dispatch({type:"CART_TOTAL_ITEM"});
    //dispatch({type: "CART_TOTAL_PRICE"})
    dispatch({type:"CART_ITEM_PRICE_TOTAL"});
    localStorage.setItem("shopifyCART",JSON.stringify(state.cart));
},[state.cart]);

//to clear the cart
const clearCart = () =>{
    dispatch({type:"CLEAR_CART"});
}
return (
<CartContext.Provider 
value={{...state,
       addToCart,
        removeItem,
        setDecrease,
        setIncrease,
        clearCart,

}}>
      {children}
</CartContext.Provider>
);
}
const useCartContext = () =>{
    return  useContext(CartContext);
}

export {CartProvider,useCartContext};