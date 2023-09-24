import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';

import { Recipe } from '../recipes/recipe.modal';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authSerivce: AuthService
  ) {}

  private URL: string =
    'https://ng-course-recipe-book-8186e-default-rtdb.firebaseio.com/recipes.json';

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.URL, recipes).subscribe((response) => {
      console.log('save recipes response: ', response);
    });
  }

  fetchData() {
    return this.http.get<Recipe[]>(this.URL).pipe(
      map((recipes) => {
        return recipes.map((recipes) => {
          return {
            ...recipes,
            ingredients: recipes.ingredients ? recipes.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        console.log('get response:', recipes);
        this.recipeService.setRecipes(recipes);
      })
    );
  }

  // fetchData() {
  //   return this.authSerivce.user.pipe(
  //     take(1),
  //     exhaustMap((user) => {
  //       return this.http.get<Recipe[]>(this.URL + '?auth=' + user.token);
  //     }),
  //     map((recipes) => {
  //       return recipes.map((recipes) => {
  //         return {
  //           ...recipes,
  //           ingredients: recipes.ingredients ? recipes.ingredients : [],
  //         };
  //       });
  //     }),
  //     tap((recipes) => {
  //       console.log('get response:', recipes);
  //       this.recipeService.setRecipes(recipes);
  //     })
  //   );
  // }
}
