import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('recipe 1','This is a very delicious dish to eat!', 'https://media.istockphoto.com/photos/marmitako-recipe-for-a-classic-basque-meal-made-of-tuna-fish-potatoes-picture-id1325566876?b=1&k=20&m=1325566876&s=170667a&w=0&h=a7ar76WRZl3wzsvwVWolCXjedgBJp5ycBDqtBKY8z1k=',[
      new Ingredient('Tomato', 7),
      new Ingredient('French frize', 5),
    ]),
    new Recipe('recipe 2', 'This dish is a very delicious', 'https://media.istockphoto.com/photos/cod-chorizo-stew-with-peas-and-parsley-in-tomato-sauce-picture-id1282531883?b=1&k=20&m=1282531883&s=170667a&w=0&h=hzOMrWqunvmRmqGJexQqXz6IBDxCKCXB_uOmLy5vFdc=',[
      new Ingredient('Meet', 1),
      new Ingredient('French frize', 5),

    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id : number) {
    return this.recipes[id]
  }
  addIngredientsToShoppingList(ingredients : Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)

  }
}
