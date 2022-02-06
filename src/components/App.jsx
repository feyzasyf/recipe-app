import Nav from "./Nav";
import RecipeList from "./RecipeList"
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

  const [recipes, setRecipes] = useState([]);

  function searchRecipe(word){
   
      console.log(word);
      axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+word)  
      .then(res=> {
        const {meals} = res.data;
        console.log(meals);
        
        setRecipes(meals);
      })
      .catch(err=>{
        console.error(err);
      })
      
   
    



  //  setRecipes(()=>{
  //       return recipes.filter(recipe=>{
  //     if(recipe.strMeal.includes(word)){
  //       return recipe;
  //     }})
  //   }
  //    )
  }

useEffect(()=>{

  axios.get("https://www.themealdb.com/api/json/v1/1/random.php")  
  .then(res=> {
    const {meals} = res.data;
    
    setRecipes(meals);
  })
  .catch(err=>{
    console.error(err);
  })
  
},[]);




  return (
    <div>
      <Nav search={searchRecipe}/>

    <RecipeList list={recipes}/>
     

     
    </div>
  );
}

export default App;
