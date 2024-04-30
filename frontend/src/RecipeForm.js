import "./App.css"
import { useState } from "react"

function RecipeForm({setRecipes}) {
  const [ingredients, setIngredients] = useState("");
  const [numberOfRecipes, setNumberOfRecipes] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    let res = await fetch("/api?" + new URLSearchParams({
      ingredients,
      "number-of-recipes": numberOfRecipes,
    }));
    if(res.status !== 200) {
      setError(await res.text());
    } else {
      setRecipes(await res.json())
    }
  };

  return (
    <div class="form-container">
      <h3>Food finder</h3>
      <form onSubmit={handleSubmit}>
        <label for="ingredients">Ingredients:</label>
        <input type="text" id="ingredients" name="ingredients" onChange={
          e=>setIngredients(e.target.value)
        } />
        <label for="number-of-recipes">Number of recipes:</label>
        <input type="number" id="number-of-recipes" name="number-of-recipes" onChange={
          e=>setNumberOfRecipes(e.target.value)
        }/>
        <div class="error-message">{error}</div>
        <button type="submit" class="button-primary"> Submit </button>
      </form>
    </div>
  );
}

export default RecipeForm;
