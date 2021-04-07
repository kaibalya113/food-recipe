import React from 'react';

const Header=(props)=>{
    return(
        <>
            <div className="jumbotron">
                <h1 className="display-1">Food Recipe</h1>
                <div class="input-group w-70 mx-auto">
                    <input type="text" class="form-control" value={props.search} onChange={props.onInputChange}/>
                    <div class=""input-group-append>
                        <button class="input-group-text">Search</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Header;