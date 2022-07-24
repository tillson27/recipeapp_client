import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
    actionTypes.GET_RECIPES,
    async () => {
        return await RecipeService.getRecipes();
    }
);

export const addRecipeAsync = createAsyncThunk(
    actionTypes.ADD_RECIPE,
    async (recipe) => {
        return await RecipeService.addRecipe(recipe);
    }
);

export const getRecipeAsync = createAsyncThunk(
    actionTypes.GET_RECIPE,
    async (id) => {
        return await RecipeService.getRecipe(id);
    }
);

export const editRecipeAsync = createAsyncThunk(
    actionTypes.EDIT_RECIPE,
    async (recipe) => {
        return await RecipeService.editRecipe(recipe);
    }
);

export const deleteAllRecipesAsync = createAsyncThunk(
    actionTypes.DELETEALL_RECIPES,
    async () => {
        return await RecipeService.deleteAllRecipes();
    }
);

export const deleteRecipeAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPE,
    async (id) => {
        return await RecipeService.deleteRecipe(id);
    }
);



