import React from 'react';
import '../App.css';

const Recipe=(props)=>{
    const{recipes} = props;
    return(
        <>
            <h1><center>Receipes</center></h1>
            <div className="row">
                {
                    recipes.map(recipe =>(
                        // <div className="col-md-3">
                            <div className="card py-2">
                                <img src={recipe.recipe.image} className="img-fluid"></img>
                                {/* <div className="card-body"> */}
                                    <div className="container">
                                        <h4>{recipe.recipe.label}</h4>
                                    </div>
                                    <ul className="ul-group">
                                        {
                                            recipe.recipe.ingredientLines.map(ingredient => (<li className="list-group-item">{ingredient}</li>))
                                        }
                                    </ul>
                                   
                                {/* </div> */}
                            </div>
                       // </div>
                    ))
                }
            </div>
        </>
    )
}

export default Recipe;