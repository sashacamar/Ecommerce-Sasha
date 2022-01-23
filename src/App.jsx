import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemListContainer/Items/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
import { Cart } from './components/Cart/Cart';

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

const App = () => (
  
    <div className="app">
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer textFinal = "Estas en el ItemListContainer" />
          </Route>

          <Route exact path="/productos/:catId">
            <ItemListContainer textFinal = "FILTRADO" />
          </Route>

          <Route exact path="/producto/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route exact path="/contacto">
            <h1>hola</h1>
          </Route>

          <Route exact path="/cart">
            <Cart></Cart>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>

        </Switch>
          
      </BrowserRouter>
      </CartProvider>

    </div>
    
  );

export default App;
