import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 8),
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();
getIngredients() {
    return this.ingredients.slice();
  }
addIngredient(ingredient: Ingredient) {
this.ingredients.push(ingredient)
this.ingredientsChanged.emit(this.ingredients.slice())

}
addIngredients(ingredients: Ingredient[]) {
 this.ingredients.push(...ingredients)
 this.ingredientsChanged.emit(this.ingredients.slice())
}
  constructor() { }
}
