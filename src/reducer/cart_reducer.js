const cart_reducer = (state,action) =>{
    if(action.type === "ADD_TO_CART"){
let     {id,amount,product} =action.payload;
        //console.log(product);


        //for  existing cart item 
        let existingProduct = state.cart.find(
            (curElem) => curElem.id === id
        );
        console.log(existingProduct);
     
        if(existingProduct){
          let updatedProduct = state.cart.map((curElem) =>{
              if(curElem.id === id){
                let newAmount = curElem.amount + amount
                if(newAmount >= curElem.max){
                    newAmount = curElem.max;
                }
                return {
                    ...curElem,
                    amount:newAmount,
                };
            }else{
                return curElem;
            }
            });
            return {
                ...state,
                cart:updatedProduct,
            };
        }
            else{
         let cartProduct;
        cartProduct = {
            id: id,
            title:product.title,
            amount,
            image:product.image,
            price:product.price,
        };
        return {
            ...state,
            cart:[...state.cart,cartProduct],
        };
    }
}
//to set increment and decrement
if(action.type === "SET_DECREMENT"){
    let updatedProduct= state.cart.map((curElem) =>{
        if(curElem.id === action.payload){
            //console.log("match")
        let decAmount  = curElem.amount-1;

        if(decAmount<= 1){
            decAmount = 1;
        }
        return {
            ...curElem,
            amount:decAmount,
        };
    }else{
        return curElem;
    }
});
   return {...state,cart:updatedProduct};
}

//to increment the count
if(action.type === "SET_INCREMENT"){
    let updatedProduct = state.cart.map((curElem) =>{
       if(curElem.id === action.payload){
        let incAmount = curElem.amount + 1;

        if(incAmount >= curElem.max){
           incAmount =curElem.max;
        }
             return{
            ...curElem,
            amount:incAmount,
         };    
       } else{
        return curElem;
       }
    });
    return {...state,cart:updatedProduct}
}      
       //to remove item from cart
        if(action.type === "REMOVE_ITEM"){
            let updatedCart=state.cart.filter(
                (curItem) => curItem.id !== action.payload
            );
        return {
            ...state,
            cart:updatedCart,
        };
    }
        //to empty or clear cart 
        if(action.type === "CLEAR_CART"){
            return {
                ...state,
                cart:[],
            };

    }
    // //to update the cart item value
    // if(action.type  === "CART_TOTAL_ITEM"){
    //     let updatedItemVal = state.cart.reduce((intialval,curElem) =>{
    //          let {amount} = curElem;

    //          intialval =intialval + amount;
    //          return intialval;
    //     },0);
    //     return {
    //         ...state,
    //         total_item:updatedItemVal,
    //     };
    // }
    //     if(action.type === "CART_TOTAL_PRICE"){
    //         let total_amount =state.cart.reduce((intialval,curElem) =>{
    //             let {price,amount}=curElem;

    //             intialval =intialval +price* amount;
    //               return intialval;  
    //         },0);
    //         return {
    //             ...state,
    //             total_amount,
    //         }
    //     }
    if(action.type=== "CART_ITEM_PRICE_TOTAL"){
        let {total_item,total_amount} =state.cart.reduce(
            (accum,curElem) =>{
                let {price ,amount} = curElem;

                accum.total_item += amount;
                accum.total_amount+= price*amount;
                return accum;
            },
            {
                total_item:0,
                total_amount:0,
            }
         );
         return{
            ...state,
            total_item,
            total_amount,                                                                                                            
         };
    }
    return  state;
}
export default cart_reducer;