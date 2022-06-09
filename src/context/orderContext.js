import React, { createContext, useReducer } from 'react';
import orderReducer from '../reducer/orderReducer';

const initialState = {
   shoppingCart : [],
}

export const OrderContext = createContext(initialState);

export const OrderProvider = ({ children }) => {
   const [state, dispatch] = useReducer(orderReducer, initialState);

   function addToCart(item) {
       dispatch({
           type: 'ADD_TO_CART',
           payload: item
       });
   }

   function emptyCart(){
        dispatch({
            type:'EMPTY_CART'
        })
   }

   return(
      <OrderContext.Provider value = {{shoppingCart : state.shoppingCart, addToCart,emptyCart}}> 
        {children} 
      </OrderContext.Provider>
   )
}