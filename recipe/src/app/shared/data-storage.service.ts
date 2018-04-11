import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  "rxjs/Rx";
import { Observable } from "rxjs/Observable";

import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http:Http, private recipeService:RecipeService) { }

  fetchRecipes() {
    this.http.get('https://ng-recipe-book-e0ac8.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();

          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }

          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          //const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
    );
  }

  storeRecipes() {
      const headers = new Headers({'Content-Type': 'application/json'});
      return this.http.put('https://ng-recipe-book-e0ac8.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
}
