import recipeReducer from './Recipes';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        recipes: recipeReducer
    },
    devTools: true
});