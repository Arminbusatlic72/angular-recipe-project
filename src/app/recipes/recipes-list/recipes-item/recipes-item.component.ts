import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor(private recipeService: RecipeService) {

   }
  @Input() recipe!: Recipe;



  ngOnInit(): void {
  }
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
