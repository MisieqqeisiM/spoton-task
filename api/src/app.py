from flask import Flask, request, jsonify
app = Flask(__name__)

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

  return jsonify([{ 
    "title": "MMM", 
    "image": "",
    "ingredients": ["eggs", "milk"],
    "ingredientsMissing": ["carrot", "cabbage"],
    "calories": 30,
    "carbs": 0,
    "protein": 0,
  }]*10), 200