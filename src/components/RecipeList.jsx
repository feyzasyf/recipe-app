import React from "react";
import Recipe from "./Recipe";

export default function RecipeList(props) {

    let columnCounter=0;
//   return props.list.map(recipe=>{
//         return  <Recipe recipe={recipe}/>
//       })
return (

<div class="container">
  <div class="row">
    {props.list.map(recipe=>{
              return  <div class="col"><Recipe key={recipe.idMeal} recipe={recipe}/></div>
            })}
  </div>
  
</div>
)




  




};


