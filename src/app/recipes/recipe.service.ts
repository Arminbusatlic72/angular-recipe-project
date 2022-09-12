import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('recipe 1','This is very delicious food to eat', 'https://media.istockphoto.com/photos/marmitako-recipe-for-a-classic-basque-meal-made-of-tuna-fish-potatoes-picture-id1325566876?b=1&k=20&m=1325566876&s=170667a&w=0&h=a7ar76WRZl3wzsvwVWolCXjedgBJp5ycBDqtBKY8z1k='),
    new Recipe('recipe 2', 'This dish is very delicious', 'https://media.istockphoto.com/photos/cod-chorizo-stew-with-peas-and-parsley-in-tomato-sauce-picture-id1282531883?b=1&k=20&m=1282531883&s=170667a&w=0&h=hzOMrWqunvmRmqGJexQqXz6IBDxCKCXB_uOmLy5vFdc=')
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }
}
