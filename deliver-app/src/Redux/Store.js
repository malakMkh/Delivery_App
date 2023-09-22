import { configureStore } from '@reduxjs/toolkit';
import departReducer from './Depart'; // Change DataReducer to departReducer
import arriveeReducer from './Arivee';
import objetReducer from './objet';
import userReducer from './userdata';
import orderReducer from './order';
import estimationReducer from './estimation';
export const store = configureStore({
  reducer: {
    depart: departReducer,
    arrivee: arriveeReducer,
    objet: objetReducer,
    user: userReducer,
    orders: orderReducer,
    estimation: estimationReducer,
  },
});
