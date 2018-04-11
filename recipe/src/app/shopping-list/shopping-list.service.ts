import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5, true),
    new Ingredient("Tomatoes", 10, true)
  ];

  addIngredient(ingredient) {
    const index = this.indexOf(this.ingredients, ingredient);

    if (index > -1) {
      this.ingredients[index].amount += ingredient.amount;
    }

    else {
      const listIngredient = new Ingredient(ingredient.name, ingredient.amount, true);
      this.ingredients.push(listIngredient);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      const index = this.indexOf(this.ingredients, ingredient);

      if (index > -1) {
        this.ingredients[index].amount += ingredient.amount;
      }

      else {
        const listIngredient = new Ingredient(ingredient.name, ingredient.amount, true);
        this.ingredients.push(listIngredient);
      }

    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  allowUpdate(index: number, item: string) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if ((this.ingredients[i].name === item) && (index == i)) {
        return true;
      }
    }

    return false;
  }

  checkExistence(item: string) {
    for (let i = 0; i < this.ingredients.length; i++) {
      if (this.ingredients[i].name === item) {
        return true;
      }
    }

    return false;

  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }


  indexOf(ingredients: Ingredient[], ingredient: Ingredient): number {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].name === ingredient.name) {
        return i;
      }
    }

    return -1;
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
