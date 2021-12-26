import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemListContainer/Items/ItemDetailContainer';

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

const App = () => (
    <div className="app">
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

          <Route path="*">
            <Redirect to="/"/>
          </Route>

        </Switch>
          
      </BrowserRouter>

    </div>
  );

export default App;
