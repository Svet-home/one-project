
import './App.css';
import Cart from './Componemts/Cart/Cart';
import Dishes from './Componemts/DishesComponents/Dishes';
import AllCategories from './Componemts/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
      <Dishes/>
      </div>
    </div>
  );
}

export default App;
