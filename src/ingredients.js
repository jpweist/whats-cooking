

class Ingredient {
  constructor(id, name, estimatedCostInCents) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCostInCents;
  }
}

if (typeof module !== "undefined") {
  module.exports = Ingredient;
}
