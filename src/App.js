import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import React, { useState } from 'react';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };
  const hideCart = () => {
    setCartIsShown(false);
  };

  return (
    <React.Fragment>
      { cartIsShown && <Cart onClose={hideCart}/>}
      <Header onShowCart={showCart}/>
      <main>
        <Meals/>
      </main>
    </React.Fragment>
  );
}

export default App;
