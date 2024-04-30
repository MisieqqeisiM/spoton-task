import requests
from flask import Flask, request, jsonify
app = Flask(__name__)
apiKey = "46bfe5b594b64d76b4ec2e72a23583fe"
@app.route("/")
def get_recipes():
  ingredients = request.args.get("ingredients", type=str)
  if not ingredients:
    return "Provide at least one ingredient", 400
    
  numberOfRecipes = request.args.get("number-of-recipes", type=int)
  if numberOfRecipes is None:
    return "Number of recipes is not a number", 400
  if numberOfRecipes <= 0:
    return "Provide a positive number of recipes", 400
  
  response = requests.get("https://api.spoonacular.com/recipes/complexSearch", {
    "apiKey": apiKey,
    "includeIngredients": ingredients,
    "number": numberOfRecipes,
    "addRecipeNutrition": "true",
    "fillIngredients": "true",
  })

  if not response.ok:
    return "API call failed", 500
  recipes = response.json()["results"]
  if not recipes:
    return "No matching recipes", 400
  result = [{
    "title": recipe["title"],
    "image": recipe["image"],
    "ingredients": [ ingredient["name"] for ingredient in recipe["usedIngredients"] ],
    "ingredientsMissing": [ ingredient["name"] for ingredient in recipe["missedIngredients"] ],
    "calories": next((nutrient["amount"] for nutrient in recipe["nutrition"]["nutrients"] if nutrient["name"] == "Calories"), 0),
    "carbs": next((nutrient["amount"] for nutrient in recipe["nutrition"]["nutrients"] if nutrient["name"] == "Carbohydrates"), 0),
    "protein": next((nutrient["amount"] for nutrient in recipe["nutrition"]["nutrients"] if nutrient["name"] == "Protein"), 0)
  } for recipe in recipes]

  return jsonify(result)