import "./App.css";

import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import characters from "./data.js";

function App() {
  function searchHandler(e) {
    window.alert("El ID que estoy buscando");
  }

  function closeHandler() {
    window.alert("Emulamos que se cierra la card");
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchHandler} />
      <Cards characters={characters} onClose={closeHandler} />
    </div>
  );
}

export default App;
