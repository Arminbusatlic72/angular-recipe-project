import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe!: Recipe;
  id!: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params
     .subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      }
     )
  }
  onToShoppingListAdded() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
