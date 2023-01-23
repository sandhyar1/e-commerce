import { createContext,useContext,useReducer,useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const intialState ={
filter_products:[],
all_products:[],
grid_view:true,
sorting_value:"lowest",





}

export const FilterContextProvider = ({children}) =>{
  const {products}  = useProductContext();

  const [state,dispatch] =useReducer(reducer,intialState);
  
  
  //to set grid view
const setGridview= () =>{
  return dispatch({type:"SET_GRID_VIEW"});
}
//to set list view
const setListView = () =>{
  return dispatch ({type:"SET_LIST_VIEW"});
}
//sorting function
const sorting = (event) =>{
  let userValue=event.target.value;
  dispatch({type:"GET_SORT_VALUE",payload:userValue});
}
//to sort the producrs
useEffect (() =>{
  dispatch({type:"SORTING_PRODUCTS"})
},[state.sorting_value]);

useEffect(() => {
 dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})

},[products]);

    return(
   <FilterContext.Provider 
   value={{...state,
   setGridview,
   setListView,
   sorting,
   }}>
   {children}

   </FilterContext.Provider>
   )
}
//custom hook
export const  useFilterContext = () =>{
    return useContext(FilterContext);
}