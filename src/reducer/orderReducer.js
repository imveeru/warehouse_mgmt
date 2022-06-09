import React from 'react';
 
const orderReducer= (state, action) => {
   switch(action.type) {
       case 'ADD_TO_CART':
           return {
                   shoppingCart: [action.payload, ...state.shoppingCart]
           }
       case 'EMPTY_CART':
            return {
                    shoppingCart: []
            }
       default:
           return state;
   }
}

export default orderReducer