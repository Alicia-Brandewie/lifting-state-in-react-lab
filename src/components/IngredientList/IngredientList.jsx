// src/components/IngredientList/IngredientList.jsx

import BurgerStack from "../BurgerStack/BurgerStack";

const IngredientList = (props) => {

  const [newIngredientList, setnewIngredientList] = useState(
    {name:'', color: ''},
  );

  const onClick = (event) => {
    event.preventDefault();
    console.log("Ingredient: Add logic here for ingredint._id");
    setnewIngredientList([...stack, newIngredientList])
    addToBurger
  };

  return (
    <>
    {/* // map through props.ingredients */}
    {newIngredientList.map((ingredient) =>
      <ul>
        <li 
        key={ingredient.name}
        style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        </li>
    <button onClick={props.addToBurger}> + </button>
  </ul>
      )};
  </>
  );
};

export default IngredientList;
