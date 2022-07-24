const addRecipe = async (recipe) => {

    const response = await fetch('http://localhost:3001/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getRecipes = async () => {
    const response = await fetch('http://localhost:3001/recipes', {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const getRecipe = async (id) => {
    const response = await fetch('http://localhost:3001/recipes/find' + new URLSearchParams({
        id: id
    }), {
        method: 'GET',
        mode: 'cors'
    });
    return response.json();
};

const deleteRecipe = async (id) => {
    const response = await fetch('http://localhost:3001/recipes/delete?' + new URLSearchParams({
        id: id
    }), {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const deleteAllRecipes = async () => {
    const response = await fetch('http://localhost:3001/recipes/deleteAll', {
        method: 'DELETE',
        mode: 'cors'
    });
    return response.json();
};

const editRecipe = async (recipe) => {

    const response = await fetch('http://localhost:3001/recipes/edit', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe),
        mode: 'cors'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

export default {
    addRecipe,
    getRecipes,
    getRecipe,
    deleteRecipe,
    deleteAllRecipes,
    editRecipe
};