import { createContext,useContext,useReducer,useEffect } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer"

const FilterContext = createContext();

const intialState ={
filter_products:[],
all_products:[],
grid_view:true,
sorting_value:"lowest",
filters:{
  text:"",
  Category:"all",
  maxPrice:0,
  minPrice:0,
  price:0,


},
};

export const FilterContextProvider = ({children}) =>{
  const {products}  = useProductContext();

  const [state,dispatch] =useReducer(reducer,intialState);
  
  
  //to set grid view
const setGridview= () =>{
  return dispatch({type:"SET_GRID_VIEW"});
};
//to set list view
const setListView = () =>{
  return dispatch ({type:"SET_LIST_VIEW"});
};
//sorting function
const sorting = (event) =>{
  let userValue=event.target.value;
  dispatch({type:"GET_SORT_VALUE",payload:userValue});
};

//to update the filter values
const updateFilterValue = (event) => {
  let name = event.target.name;
  let value = event.target.value;

  return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
};
//to clear filters
const clearFilters = () =>{
  dispatch({type:"CLEAR_FILTERS"});
}

//to sort the producrs
useEffect (() =>{
  dispatch({type:"FILTER_PRODUCTS"});
  dispatch({type:"SORTING_PRODUCTS"});
},[products,state.sorting_value,state.filters]);

//to set all the products for grid and list view
useEffect(() => {
 dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})

},[products]);

    return(
   <FilterContext.Provider 
   value={{
    ...state,
   setGridview,
   setListView,
   sorting,
   updateFilterValue,
   clearFilters,
   }}>
   {children}

   </FilterContext.Provider>
   )
}
//custom hook
export const  useFilterContext = () =>{
    return useContext(FilterContext);
}