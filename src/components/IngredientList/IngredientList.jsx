const IngredientList = (props) => {

  // const [newIngredientList, setnewIngredientList] = useState(
  //   {name:'', color: ''},
  // );

  // const onClick = (event) => {
  //   event.preventDefault();
  //   console.log("Ingredient: Add logic here for ingredint._id");
  //   setnewIngredientList([...stack, newIngredientList])
  //   addToBurger
  // };

  return (
    <>
        <div>
          <h2>Ingredients</h2>
          {props.availableIngredients.map((ingredient) =>
            <ul>
              <li
                key={ingredient.name}
              style={{ backgroundColor: ingredient.color }}
              >
                {ingredient.name}
              </li>
              <button 
              onClick= {()=>{props.addToBurger(ingredient)}}>
              + </button>
            </ul>
          )}
        </div>
    </>
  );
};

export default IngredientList;
