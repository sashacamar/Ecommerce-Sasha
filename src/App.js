import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer textFinal = "Estas en el ItemListContainer" />
    </div>
  );
}

export default App;
