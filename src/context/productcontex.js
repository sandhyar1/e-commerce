//create a context
//Provider
//consumer is the part of the Context api for simplification we sue uscontext hook(contextApi is parent)
//Consumer => useContext(Hook)
//Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

import {createContext,useContext,useEffect,useReducer} from "react";
import axios from "axios"; 
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API ="https://fakestoreapi.com/products";

const intialState = {
    isLoading:false,
    isError:false,
    products:[],
    isSingleLoading: false,
  singleProduct: {},
};
const AppProvider =({children}) =>{
    const[state,dispatch] = useReducer(reducer,intialState);

    const getProducts = async(url) =>{
        dispatch({type:"SET_LOADING"});
        try{
         const res=await axios.get(url);
        const products =await res.data;
        //  console.log(products);
       dispatch({type:"SET_API_DATA",payload:products});
        
    }catch(error){
       dispatch({type:"API_ERROR"});
    }
}
//second api call for single product
const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;

      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
useEffect(() =>{
        getProducts(API);

    },[]);
    
    return (
    <AppContext.Provider value={{...state,getSingleProduct}}>
       {children}
       </AppContext.Provider>
    );
};
//custom Hooks

const useProductContext= () =>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};