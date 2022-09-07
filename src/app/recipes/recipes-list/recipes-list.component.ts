import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('recipe 1','This is very delicious food to eat', 'https://media.istockphoto.com/photos/marmitako-recipe-for-a-classic-basque-meal-made-of-tuna-fish-potatoes-picture-id1325566876?b=1&k=20&m=1325566876&s=170667a&w=0&h=a7ar76WRZl3wzsvwVWolCXjedgBJp5ycBDqtBKY8z1k='),
    new Recipe('recipe 2', 'This dish is very delicious', 'https://media.istockphoto.com/photos/cod-chorizo-stew-with-peas-and-parsley-in-tomato-sauce-picture-id1282531883?b=1&k=20&m=1282531883&s=170667a&w=0&h=hzOMrWqunvmRmqGJexQqXz6IBDxCKCXB_uOmLy5vFdc=')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
