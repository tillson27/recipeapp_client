import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getRecipesAsync, getRecipeAsync, addRecipeAsync, deleteAllRecipesAsync, deleteRecipeAsync, editRecipeAsync } from '../thunks';

// const recipeDefaultState = {
//     "recipes": [
//         {
//             "rname": "Feta Tomato Pasta",
//             "ingredients": ["Your Noodle of Choice", "Feta", "Basil", "Grape Tomatoes", "Mushrooms", "Olive Oil"],
//             "instructions": ["Preheat oven to 400", "Bring a pot of water to boil", "Place tomatoes, mushrooms and feta in a baking tray and garnish with basil and olive oil", "Bake for 40 minutes", "Place pasta in boiling water for 12 minutes and then drain", "Mix together and enjoy"]
//         },
//         {
//             "rname": "Avocado Toast",
//             "ingredients": ["Bread", "Avocado", "Hot Sauce (optional)", "Egg"],
//             "instructions": ["Toast Bread", "Cook egg sunny side up", "Slice up avocado and mash onto toasted bread", "Add hotsauce, egg and enjoy"]
//         }
//     ]
// };

const INITIAL_STATE = {
    list: [],
    getRecipe: REQUEST_STATE.IDLE,
    getRecipes: REQUEST_STATE.IDLE,
    addRecipe: REQUEST_STATE.IDLE,
    deleteAllRecipes: REQUEST_STATE.IDLE,
    deleteRecipe: REQUEST_STATE.IDLE,
    editRecipe: REQUEST_STATE.IDLE,
    error: null
};

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getRecipesAsync.pending, (state) => {
                state.getRecipes = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getRecipesAsync.fulfilled, (state, action) => {
                state.getRecipes = REQUEST_STATE.FULFILLED;
                state.list = action.payload;
            })
            .addCase(getRecipesAsync.rejected, (state, action) => {
                state.getRecipes = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(addRecipeAsync.pending, (state) => {
                state.addRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(addRecipeAsync.fulfilled, (state, action) => {
                state.addRecipe = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(addRecipeAsync.rejected, (state, action) => {
                state.getRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(getRecipeAsync.pending, (state) => {
                state.getRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(getRecipeAsync.fulfilled, (state, action) => {
                state.getRecipe = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(getRecipeAsync.rejected, (state, action) => {
                state.getRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteAllRecipesAsync.pending, (state) => {
                state.deleteAllRecipes = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteAllRecipesAsync.fulfilled, (state, action) => {
                state.deleteAllRecipes = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(deleteAllRecipesAsync.rejected, (state, action) => {
                state.deleteAllRecipes = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(deleteRecipeAsync.pending, (state) => {
                state.deleteRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
                state.deleteRecipe = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(deleteRecipeAsync.rejected, (state, action) => {
                state.deleteRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            })
            .addCase(editRecipeAsync.pending, (state) => {
                state.editRecipe = REQUEST_STATE.PENDING;
                state.error = null;
            })
            .addCase(editRecipeAsync.fulfilled, (state, action) => {
                state.editRecipe = REQUEST_STATE.FULFILLED;
                state.list.push(action.payload);
            })
            .addCase(editRecipeAsync.rejected, (state, action) => {
                state.editRecipe = REQUEST_STATE.REJECTED;
                state.error = action.error;
            });
    }
});

// REDUCER (based on the action, it motifies the store)
// const recipeReducer = (state = recipeDefaultState, action) => {
//     switch (action.type) {
//         case "ADDRECIPE":
//             return {
//                 ...state,
//                 recipes: state.recipes.concat(action.payload)
//             };
//         case "DELETERECIPE":
//             return {
//                 recipes: [
//                     ...state.recipes.filter(recipe => recipe.rname !== action.payload)
//                 ]
//             };
//         case "CLEARRECIPES":
//             return {
//                 recipes: [
//                 ]
//             }
//         default:
//             return state
//     }
// }

export default recipeSlice.reducer;