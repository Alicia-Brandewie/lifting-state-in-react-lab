import { useState } from 'react';


const IngredientList /*NewTodo Component*/ = (props) => {
// const [newIngredient, setNewIngredient] = useState([]);
  const [stack, setStack] = useState([]);


const clicked/*handleChange*/= (event) => {
  setStack= event.target.value;
    console.log("stack:", stack);
props.addToBurger
};
  
    // props.NewIngredientList(ingredient);


// const handleStack = /*BELOW // THIS is the function that moves the data from component to component*/
//   event.preventDefault();
//   props.addToBurger(newIngredient);
// };

// const  /*props.*/addToBurger/*addTodo()/*/(newIngredient/*newIngredient/*NewTodo_data = newStack*/) => {
//        // setStack(stack);
//   console.log("newIngredient:", newIngredient);
// setStack([...stack, newStack]);
//   console.log("Set New Stack:", [...stack, newStack]);
  

// }
// }


  return (
    <>
      <ul>
        <h2>Ingredients</h2>
        {props.availableIngredients.map((ingredient) =>
          <li
            key={ingredient.name} //arguement that goes into addToBurger function/*
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button
            value={ingredient.name}
            
            onClick={clicked
              // clicked/*() => { props.addToBurger(ingredient) }*/
              }>
              + </button>
          </li>
        )}
      </ul>
    </> 
  );
};

export default IngredientList;
