import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
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
              private route: ActivatedRoute,
              private router: Router) { }

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
  onEditRecipe() {
  this.router.navigate(['edit'], {relativeTo: this.route})

  }
}
