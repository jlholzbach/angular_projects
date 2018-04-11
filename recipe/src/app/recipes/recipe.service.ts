import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'A Super Tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient("Meat", 1, false),
        new Ingredient("French Fries", 20, false)
      ]
    ),

    new Recipe(
      2,
      'Grilled Cheese',
      'Easy to Make. Goes good with fries!',
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Grilled_cheese_sandwich.jpg',
      [
        new Ingredient("Bread Slices", 2, false),
        new Ingredient("American Cheese Slices", 2, false),
        new Ingredient("Butter", 1, false)
      ]
    )
  ];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  getId() {
    const recipeLength = this.recipes.length-1;

    if (recipeLength != -1) {
      return this.recipes[recipeLength].id+1;
    }

    else {
      return 1;
    }
  }

  getRecipe(id: number) {
    const recipe = this.recipes.find(
      (r) => {
        return r.id === id;
      }
    );

    return recipe;
  }

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(recipe: Recipe) {
    var foundIndex = this.recipes.findIndex(x => x.id == recipe.id);
    this.recipes[foundIndex] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(recipe: Recipe) {
    var foundIndex = this.recipes.findIndex(x => x.id == recipe.id);
    this.recipes.splice(foundIndex, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
