import '../styles/App.css';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addRecipeAsync } from '../redux/thunks';

function Form() {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = parseRecipeInput(inputs);
        dispatch(
            addRecipeAsync(recipe)
        );
        reset();
        window.location.reload();
        alert("Congrats, you added a new recipe!");
    }

    function reset() {
        setInputs({
            rname: "",
            ingredients: "",
            instructions: "",
            timetoComplete: 0,
        })
    }

    return (
        <div id="Form">
            <form name="NewRecipe" id="NewRecipe" action="" method="GET" onSubmit={handleSubmit}>
                <label for="rname">Recipe Title:</label><br />
                <input type="text" id="rname" name="rname" value={inputs.rname || ""} onChange={handleChange} required /><br /><br />
                <label for="ingredients">Ingredients:</label><br />
                <input type="text" id="ingredients" name="ingredients" value={inputs.ingredients || ""} onChange={handleChange} required /><br /><br />
                <label for="instructions">Instructions:</label><br />
                <input type="text" id="instructions" name="instructions" value={inputs.instructions || ""} onChange={handleChange} required /><br /><br />
                <label for="timetoComplete">Time to Complete:</label><br />
                <input type="text" id="timetoComplete" name="timetoComplete" value={inputs.timetoComplete || ""} onChange={handleChange} required /><br /><br />
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" onClick={reset} />
            </form>
        </div>
    );
}

export default Form;

function parseRecipeInput(recipeInput) {
    let rname = recipeInput.rname;
    let ingredients = recipeInput.ingredients;
    let instructions = recipeInput.instructions;
    let timetoComplete = recipeInput.timetoComplete;

    // 1) format the recipe (split on the semi colons)
    let ingredientsList = ingredients.split(';');
    let instructionsList = instructions.split(';');

    // 2) create a new json object for the added recipe
    let newRecipe = {};
    newRecipe["rname"] = rname;
    newRecipe["ingredients"] = ingredientsList;
    newRecipe["instructions"] = instructionsList;
    newRecipe["timetoComplete"] = parseInt(timetoComplete);
    return newRecipe;
}