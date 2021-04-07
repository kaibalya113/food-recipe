import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Recipe from './Components/Recipe';
import axios from 'axios';


function App() {
  const[search, setSearch] = useState("");
  const[recipes, setRecipe] = useState([]);

  const onInputChange = (e) =>{
    //console.log(e.target.value)
    setSearch(e.target.value);
   // console.log(search);
  }

  const API_ID = "690f4439";
  const API_KEYS = "d4eec2d181677fa7e996c7efd2271fff";
  const API_URL = `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEYS}`;


  // When app is load useEffect load first 

  useEffect(() =>{
    //console.log("app initialize...");
    if(search != null){
      getRecipe();
    }
    
  },[])

  const getRecipe= async() =>{
    const data = await axios.get(API_URL);
    console.log(data.data.hits);
    setRecipe(data.data.hits);
  }
  const onSearchClick = () =>{
    console.log("dd");
    getRecipe()
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipe recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;
