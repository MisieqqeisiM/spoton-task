import "./Recipe.css"

function Recipe({recipe}) {
  return (
    <div class="recipe">
      <div class="header">
        <img src={recipe.imgHref} alt="food" width="100" height="100" />
        <h5>{recipe.title}</h5>
      </div>
      <div class="nutrition">
        <p>calories: <b>{recipe.calories}</b> </p>
        <p>carbs: <b>{recipe.carbs}</b> </p>
        <p>protein: <b>{recipe.protein}</b> </p>
      </div>
      <div class="ingredients">
        {recipe.ingredientsMissing.map(ingredient => <code style={{color:"red"}}>{ingredient}</code>)}
        {recipe.ingredients.map(ingredient => <code>{ingredient}</code>)}
      </div>
    </div>
  );
}

export default Recipe;
