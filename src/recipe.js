

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
    return this.ingredientPerRecipe.map((ingredient) => {
      let ingredientQuanitity = ingredient.quanitity;
      return ingredientQuanitity.map(item => item.amount);
    })
    return this.costPerRecipe = total;
  }

  retrieveInstructions(recipe) {
    return recipe.instructions;

  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
