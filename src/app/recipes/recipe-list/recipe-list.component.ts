import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() itemSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test recipe description',
      'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a second test recipe description',
      'https://bakingmischief.com/wp-content/uploads/2021/11/easy-lasagna-image-square-2.jpg'
    ),
    new Recipe(
      'Another Third Test Recipe',
      'This is simply a third test recipe description',
      'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
    ),
  ];

  constructor() {}

  onRecipeSelected(recipe: Recipe) {
    this.itemSelectedRecipe.emit(recipe);
  }
}
