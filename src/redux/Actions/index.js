const addRecipe = (newRecipe) => {
    return {
        type: 'ADDRECIPE',
        payload: newRecipe
    }
}

const deleteRecipe = (recipeName) => {
    return {
        type: 'DELETERECIPE'
    }
}

const clearRecipes = () => {
    return {
        type: 'CLEARRECIPES'
    }
}