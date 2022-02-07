import Nav from "./Nav";
import RecipeList from "./RecipeList"
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [searchWord, setSearchWord] = useState("");
  const [recipes, setRecipes] = useState([]);

  
  useEffect(()=>{
if (searchWord === "") return;
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchWord}`)  
    .then(res=> {
      const {meals} = res.data;
      
      setRecipes(meals);
    })
    .catch(err=>{
      console.error(err);
    })
    
  },[searchWord]);
  



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
      <Nav search={(searchItem)=>{
       setSearchWord(searchItem)}}
       />

    <RecipeList list={recipes}/>
     

     
    </div>
  );
}

export default App;
