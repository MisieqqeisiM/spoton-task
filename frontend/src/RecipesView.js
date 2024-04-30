
import "./Recipe.css"
import Recipe from "./Recipe";

function RecipesView({recipes}) {

  return (
    <div class="recipes-container">
      {recipes.map(recipe =>
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}

export default RecipesView;
