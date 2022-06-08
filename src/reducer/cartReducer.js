import React from 'react';
 
const cartReducer= (state, action) => {
   switch(action.type) {
       case 'ADD_ITEM':
           return {
                   shoppingList: [action.payload, ...state.shoppingList]
           }
       case 'REMOVE_ITEM':
           return {
               shoppingList: state.shoppingList.filter(item => item !== action.payload)
           }
       case 'CLEAR_CART':
            return {
                shoppingList: []
            }
       default:
           return state;
   }
}

export default cartReducer