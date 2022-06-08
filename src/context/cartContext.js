import React, { createContext, useReducer } from 'react';
import cartReducer from '../reducer/cartReducer';

const initialState = {
   shoppingList : []
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, initialState);

   function addItemToList(item) {
       dispatch({
           type: 'ADD_ITEM',
           payload: item
       });
   }
   function removeItemFromList(item) {
       dispatch({
           type: 'REMOVE_ITEM',
           payload: item
       });
   }

   function clearCart(){
       dispatch({
           type:'CLEAR_CART'
       });
   }

   return(
      <CartContext.Provider value = {{shoppingList : state.shoppingList, addItemToList, removeItemFromList,clearCart}}> 
        {children} 
      </CartContext.Provider>
   )
}