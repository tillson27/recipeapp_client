import React from 'react';
import Form from '../Components/Form.js';
import RecipeCards from '../Components/RecipeCards.js';
import { useDispatch } from "react-redux";
import { deleteAllRecipesAsync } from '../redux/thunks.js';

function Home() {

    const dispatch = useDispatch()
    const clearCards = () => {
        dispatch(deleteAllRecipesAsync());
        window.location.reload();
    };

    return (
        <div id="webpage">

            <div id="welcome_recipe_input">
                <h2>Welcome to Food Explorer!!</h2>
                <h4>Food Explorer is a recipe website where you can browse our pre-existing recipes or add new recipes of
                    your
                    own
                    for others to enjoy. Get started below:</h4>
                <h6>Note: For ingredients/instructions please seperate every item/step in the process with a semi-colon.
                    (i.e.
                    "Bananas ;Strawberries" or "Cut ;Blend ;Serve")</h6>

                <Form />

            </div>

            <h3 id="recipe_head_title">📃 Our Recipes</h3>

            <div id="recipe_list" class="recipes">
                <br />
                <RecipeCards />

            </div>

            <button id="clear_button" onClick={() => clearCards()}>Clear Recipes</button>

        </div>
    );
}

export default Home;