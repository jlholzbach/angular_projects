import { Component } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "../recipes/recipe.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isCollapsed = true;

  constructor(private dataStorageService:DataStorageService, private recipeService:RecipeService) { }

  onFetch() {
    this.dataStorageService.fetchRecipes();
  }

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

}
