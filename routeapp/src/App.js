import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TTTApp from "./roots/TicTacToe/App.js"
import WeatherApp from "./roots/WeatherApp/App.js"
import TriviaApp from "./roots/TriviaApp/App.js";
import MenuApp from "./roots/MenuApp/App.js";
import Root from "./roots/root.js";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Root />}/>
        <Route path = "tttapp" element={<TTTApp />}/>
        <Route path = "weatherapp" element={<WeatherApp />}/>
        <Route path = "triviaapp" element={<TriviaApp />}/>
        <Route path = "menuapp" element={<MenuApp />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;