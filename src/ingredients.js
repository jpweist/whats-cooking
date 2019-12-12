

class Ingredient {
  constructor(id, name, estimatedCostInCents) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = estimatedCostInCents;
  }
}

// module.exports = Ingredient;

if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}
