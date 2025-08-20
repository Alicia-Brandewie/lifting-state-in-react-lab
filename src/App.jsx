import './App.css';
import { useState } from 'react';

import IngredientList from './components/IngredientList/IngredientList';'./components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';


const App = () => {
  const [availableIngredients, setAvailableIngredients] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ]);

  const [stack, setStack] = useState([])

  const addToBurger = (ingredient) => {
//for button click in childIngredientList
    const leftoverIngredients = availableIngredients.filter((banana) =>
      banana.name !== ingredient.name
    );
    setAvailableIngredients(leftoverIngredients);
    stack.push(ingredient);
    setStack(stack);
    console.log("Burger:", stack);
    console.log("leftover Ingredients:", leftoverIngredients);
    console.log("availabile ingredients:", availableIngredients);
  }

  

//     const removeFromBurger = () => {
// //for button click in childBurgerStack

//     }




  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div>
        <IngredientList 
          availableIngredients={availableIngredients}
          addToBurger={addToBurger} 
          />
        </div>
        
        <div>
        {/* <BurgerStack 
        availableIngredients={availableIngredients}

        // removeFromBurger={removeFromBurger}
        />       */}
       </div>
        </section>
    </main>
  );
};

export default App;