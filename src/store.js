//Redux store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './service/GlobalState.js'
import cartReducer from './service/CartSlice.js';
import { loadState, saveState } from "./service/localStorage.js";

const preloadedState = loadState();
 
export const store = configureStore({
    reducer:{
        loginauth:authReducer,
        cart: cartReducer
    },
  preloadedState
})

store.subscribe(() => {
    saveState({
      cart: store.getState().cart
    });
  });