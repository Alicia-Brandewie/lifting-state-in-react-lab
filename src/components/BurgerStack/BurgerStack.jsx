// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return <ul>// map through props.ingredients


    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
    </li>

<button onClick={props.removeFromBurger}> X </button>


  </ul>;


};

export default BurgerStack;
