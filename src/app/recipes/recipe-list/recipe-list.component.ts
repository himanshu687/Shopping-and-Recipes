import { Component } from '@angular/core';
import { Receipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Receipe[] = [
    new Receipe(
      'A Test Recipe',
      'This is simply a test recipe description',
      'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg'
    ),
    new Receipe(
      'A Test Recipe',
      'This is simply a test recipe description',
      'https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg'
    ),
  ];

  constructor() {}
}
