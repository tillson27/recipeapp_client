import React, { useEffect } from 'react';
import { RecipeCard } from "./RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import '../styles/App.css';
import { getRecipesAsync } from "../redux/thunks";

const RecipeCards = () => {
    // const storedRecipes = useSelector(state => state.recipeReducer);
    // const recipes = storedRecipes.recipes.map(recipe => <RecipeCard title={recipe.rname} ingredients={recipe.ingredients} instructions={recipe.instructions} />)


    const recipes = useSelector(state => state.recipes.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipesAsync())
    }, []);

    const recipeList = recipes.map(recipe => <RecipeCard title={recipe.rname} ingredients={recipe.ingredients} instructions={recipe.instructions} id={recipe._id} />);

    return (
        <div id="recipe_list">
            {recipeList}
        </div>
    )
}

export default RecipeCards;
