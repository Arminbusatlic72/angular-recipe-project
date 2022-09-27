import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomato', 8),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();
getIngredients() {
    return this.ingredients.slice();
  }
addIngredient(ingredient: Ingredient) {

  if(this.ingredients.some(i => i.name === ingredient.name)) {
    const sameItem: any = this.ingredients.find(i => i.name == ingredient.name );
    sameItem.number= Number(sameItem.number) + Number(ingredient.number)
  } else {
    this.ingredients.push(ingredient)
  }

this.ingredientsChanged.next(this.ingredients.slice())

}
addIngredients(ingredients: Ingredient[]) {
 console.log(ingredients)
 this.ingredients.push(...ingredients)
 this.ingredientsChanged.next(this.ingredients.slice())
}
  constructor() { }
}
