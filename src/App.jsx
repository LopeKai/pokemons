import { Header } from './components/Header';
import { ListPokemon } from './components/ListPokemon';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="List Pokemon" />
      <main>
        <ListPokemon />
      </main>
    </div>
  );
}

export default App;
