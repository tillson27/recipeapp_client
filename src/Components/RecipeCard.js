import '../styles/App.css';
import { useDispatch } from "react-redux";
import { Ingredient } from "./Ingredient"
import { Instruction } from "./Instruction"
import DetailedRecipeCard from "./DetailedPopup/DetailedRecipeCard";
import { useState } from "react";
import { deleteRecipeAsync } from '../redux/thunks';
import React from 'react';
import EditForm from './EditForm';

export const RecipeCard = (props) => {

    const dispatch = useDispatch()

    const deleteRecipeCard = (recipe_id) => {
        dispatch(deleteRecipeAsync(recipe_id));
        window.location.reload();
        window.location.reload();
    };
    const ingredients = props.ingredients.map(ingredient => <Ingredient name={ingredient} />);
    const instructions = props.instructions.map(instruction => <Instruction name={instruction} />);

    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);

    const detailedViewCloser = () => {
        setVisibility(false);
    };
    const detailedViewCloser2 = () => {
        setVisibility2(false);
    };

    return (
        <div id="ind_recipe_card">
            <div id="recipe_title">
                <div className="card-buttons">
                    <button id="delete-card" onClick={() => deleteRecipeCard(props.id)}><b>X</b></button>
                </div>
                <h2><b>{props.title}</b></h2>
            </div>
            <div id="recipe_details">
                <ul>
                    <h4>Ingredients</h4>
                    <p>{ingredients}</p>
                </ul>
                <button className="view_more_details" onClick={() => setVisibility(true)}>View more details</button>
                <br></br>
                <br></br>
                <button className="edit" onClick={() => setVisibility2(true)}>Edit</button>
                <DetailedRecipeCard onClose={detailedViewCloser}
                    show={visibility}
                    title={props.title}>
                    <div id="recipe_details_2">
                        <ul>
                            <h4>Ingredients</h4>
                            <p>{ingredients}</p>
                        </ul>
                        <ol>
                            <h4>Instructions</h4>
                            <p>{instructions}</p>
                        </ol>
                    </div>
                </DetailedRecipeCard>
                <DetailedRecipeCard onClose={detailedViewCloser2}
                    show={visibility2}
                    title="Edit Recipe">
                    <div id="recipe_details_2">
                        <h5>Please fill in below the recipe you'd like to change the current recipe to and press submit!</h5>
                        <EditForm id={props.id} rname={props.title} ingredients={props.ingredients} instructions={props.instructions} />
                    </div>
                </DetailedRecipeCard>
            </div>
        </div>
    );
}