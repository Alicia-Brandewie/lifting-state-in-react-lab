const BurgerStack = (props) => {
  return (
    <>
      <ul>
        <h2>Burger</h2>
        {props.stack.map((ingredient) =>
          <li
            key={ingredient.name}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button
              onClick={() => { props.removeFromBurger(ingredient) }}>
              X </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default BurgerStack;
