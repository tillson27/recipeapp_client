import '../styles/App.css';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { editRecipeAsync } from '../redux/thunks';
import PropTypes from "prop-types";

function EditForm(props) {
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const recipe = parseRecipeInput(inputs, props.id);
        dispatch(
            editRecipeAsync(recipe)
        );
        reset();
        window.location.reload();
    }

    function reset() {
        setInputs({
            rname: "",
            ingredients: "",
            instructions: "",
        })
    }

    return (
        <div id="Form">
            <form name="NewRecipe" id="NewRecipe" action="" method="GET" onSubmit={handleSubmit}>
                <label for="rname">Recipe Title:</label><br />
                <input type="text" id="rname" name="rname" defaultValue={inputs.rname || props.rname} onChange={handleChange} required /><br /><br />
                <label for="ingredients">Ingredients:</label><br />
                <input type="text" id="ingredients" name="ingredients" defaultValue={inputs.ingredients || props.ingredients} onChange={handleChange} required /><br /><br />
                <label for="instructions">Instructions:</label><br />
                <input type="text" id="instructions" name="instructions" defaultValue={inputs.instructions || props.instructions} onChange={handleChange} required /><br /><br />
                <label for="timetoComplete">Time to Complete:</label><br />
                <input type="text" id="timetoComplete" name="timetoComplete" value={inputs.timetoComplete || ""} onChange={handleChange} required /><br /><br />
                {/* <input type="submit" value="Submit" onClick={() => newRecipe(this.form)} /> */}
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" onClick={reset} />
            </form>
        </div>
    );
}

EditForm.propTypes = {
    rname: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default EditForm;




function parseRecipeInput(recipeInput, recipe_id) {
    let rname = recipeInput.rname;
    let ingredients = recipeInput.ingredients;
    let instructions = recipeInput.instructions;
    let timeToComplete = recipeInput.timeToComplete

    // 1) format the recipe (split on the semi colons)
    let ingredientsList = ingredients.split(',');
    let instructionsList = instructions.split(',');

    // 2) create a new json object for the added recipe
    let newRecipe = {};
    newRecipe["_id"] = recipe_id;
    newRecipe["rname"] = rname;
    newRecipe["ingredients"] = ingredientsList;
    newRecipe["instructions"] = instructionsList;
    newRecipe["timeToComplete"] = timeToComplete;

    return newRecipe;
}