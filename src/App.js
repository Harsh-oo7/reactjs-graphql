import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipe from "./components/Recipe";
import CreateRecipe from './components/CreateRecipe'


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
