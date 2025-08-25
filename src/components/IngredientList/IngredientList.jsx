import { useState } from 'react';


const IngredientList  = (props) => {


// const clicked= (ingredient) => { 
//   props.addToBurger(ingredient)
// };
  

  return (
    <>
      <ul>
        <h2>Ingredients</h2>
        {props.availableIngredients.map((ingredient) =>
          <li
            key={ingredient.name} 
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button
            value={ingredient.name}
            

          onClick= {()=>{props.addToBurger(ingredient)}}>
              + </button>
          </li>
        )}
      </ul>
    </> 
  );
};

export default IngredientList;
