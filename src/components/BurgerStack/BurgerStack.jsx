const BurgerStack = (props) => {


  return (
    <>
              <h2>Burger</h2>

        <div>
          {props.availableIngredients.map((ingredient) =>
            <ul>
              <li
                key={ingredient.name}
              style={{ backgroundColor: ingredient.color }}
              >
                {ingredient.name}
              </li>
              <button onClick={props.removeFromBurger}> X </button>
            </ul>
          )}
        </div>
    </>
  );
};


export default BurgerStack;
