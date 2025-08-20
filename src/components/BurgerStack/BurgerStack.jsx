const BurgerStack = (props) => {


  return (
    <>
              <h2>Burger</h2>

        <div>
          {props.stack.map((ingredient) =>
            <ul>
              <li
                key={ingredient.name}
              style={{ backgroundColor: ingredient.color }}
              >
                {ingredient.name}
              </li>
              <button 
              onClick={()=> {props.removeFromBurger(ingredient)}}>
                X </button>
            </ul>
          )}
        </div>
    </>
  );
};


export default BurgerStack;
