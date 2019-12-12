

class Recipe {
  constructor(id, name, image, tags, instructions, ingredients ) {
    this.id = id;
    this.tags = tags;
    this.name = name;
    this.image = image;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.costPerRecipe = 0;
  }

  findIngredientPerRecipe() {
    return this.ingredients.forEach((ingredient) => {
      this.ingredientPerRecipe.push(ingredient)
    });
  }

  findCostPerRecipe() {
    let total = 0;
    let allIngredients = [];
    return this.ingredients.map((ingredient) => {
      let ingredientID= ingredient.id;
      allIngredients.push(ingredientID)
      allIngredients.filter(ingredient => {
        if (allIngredients == ingredient)
        total += ingredient[ingredient].estimatedCostInCents;
        return total;
      })

      })
    return this.costPerRecipe = total;
  }

  retrieveInstructions(recipe) {
    return recipe.instructions;

  }
}

if (typeof module !== "undefined") {
  module.exports = Recipe;
}
