class Pantry {
  canCookMeals(user) {
    if (user.pantry !== []) {
      user.pantry.forEach(ingredient => {
        ingredient.amount -= 1;
      });
      return true;
    }
    return false;
  }

  findIngredients(user) {
    return user.pantry;
  }

  removeAfterCooking(user) {
    return user.pantry;
  }
}
// module.exports = Pantry;
if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
