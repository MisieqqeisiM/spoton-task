import "./App.css"
import { useState } from "react"
import RecipeForm from "./RecipeForm"
import RecipesView from "./RecipesView";

function App() {
  const [recipes, setRecipes] = useState(null)

  if(!recipes) {
    return <RecipeForm setRecipes={setRecipes} />;
  } else {
    return <RecipesView recipes={recipes} />;
  }
}

export default App;
