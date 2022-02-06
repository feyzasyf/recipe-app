import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Nav (props) {


  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  const [searchItem, setSearchItem] = useState("");

  function handleOnChange(e){

    const value= e.target.value;
    setSearchItem(value);

  };


useEffect(()=>{


  axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  .then(res=>{
    
    setCategories(res.data.meals);
    
  })
  .catch((err)=>{ console.error(err)})
},[]);

useEffect(()=>{


  axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
  .then(res=>{
    
    setAreas(res.data.meals);
    
  })
  .catch((err)=>{ console.error(err)})
},[]);
 




  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Feyfey's Cookbook</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {categories.map(category=>{
              return <li><a class="dropdown-item" href="#">{category.strCategory}</a></li>
            })}
              
              
             
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cuisines
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            {areas.map(area=>{

              return  <li><a class="dropdown-item" href="#">{area.strArea}</a></li>
            })}
             
              
             
            </ul>
          </li>
          
        </ul>
        <form onSubmit={(e)=>{
              props.search(searchItem);
              setSearchItem("");
              e.preventDefault();

          }}class="d-flex">
          <input onChange={handleOnChange} value={searchItem} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button  class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
};
