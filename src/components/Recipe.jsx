import React from "react";

export default function Recipe(props){

const instruction = props.recipe.strInstructions.substring(0,150)+"...";
return(

    <div class="card" style={{width: "18rem"}}>
  <img  src={props.recipe.strMealThumb} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.recipe.strMeal}</h5>
    <p class="card-text">{props.recipe.strArea} / {props.recipe.strCategory}</p>
    <p class="card-text">{instruction}</p>

    <a href="" class="btn btn-primary">Read More</a>
  </div>
</div>

)
};
