import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  detail: Recipe;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
          /*if (+params['id'] == 3) {
              this.router.navigate(['../']);
          }*/

          this.detail = this.recipeService.getRecipe(+params['id']);
      }
    );
  }

  addToList() {
    this.shoppingListService.addIngredients(this.detail.ingredients);
  }

  onEdit() {
      this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.detail);
    this.router.navigate(['/recipes']);
  }
}
