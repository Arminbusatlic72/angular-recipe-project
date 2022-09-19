import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  constructor() {

   }
  @Input() recipe!: Recipe;
  @Input() index!: Number;




  ngOnInit(): void {
  }
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe)
  // }

}
