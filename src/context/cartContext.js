import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducer/AppReducer ';

const initialState = {
   shoppingList : []
}

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   // Actions for changing state

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

   return(
      <CartContext.Provider value = {{shoppingList : state.shoppingList, addItemToList, removeItemFromList}}> 
        {children} 
      </CartContext.Provider>
   )
}