import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  slForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.slForm = new FormGroup({
        'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'amount': new FormControl(null, [Validators.required])
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
          this.editMode = true;
          this.editedItemIndex = index;
          this.editedItem = this.shoppingListService.getIngredient(index);

          this.slForm.setValue({
            'name': this.editedItem.name,
            'amount': this.editedItem.amount
          });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.editMode == false) {
      if (this.shoppingListService.checkExistence(control.value)) {
        return {'itemExists': true};
      }

      else {
        return null;
      }
    }

    else {
      if ((this.shoppingListService.allowUpdate(this.editedItemIndex, control.value)) || (control.value == "")) {
        return null;
      }

      return {'itemExists': true};
    }

  }

  existingItem(control: FormControl): {[s: string]: boolean} {
    if (this.editMode == false) {
      if (this.shoppingListService.checkExistence(control.value)) {
        return {'itemExists': true};
      }

      else {
        return null;
      }
    }

    else {
      if (this.shoppingListService.allowUpdate(this.editedItemIndex, control.value)) {
        //return null;
      }

      return null;
      //return null;
      //return {'itemExists': true};
    }

  }

  onSubmit() {
    const value = this.slForm.value;
    const ingredient = new Ingredient(value.name, value.amount, true);

    if (this.editMode == false) {
      this.shoppingListService.addIngredient(ingredient);
    }

    else {
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
      this.editMode = false;
    }

    this.slForm.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
