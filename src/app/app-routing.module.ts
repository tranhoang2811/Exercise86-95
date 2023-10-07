import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise86Component } from './exercise86/exercise86.component';
import { Exercise87Component } from './exercise87/exercise87.component';
import { Exercise88ProductDetailsComponent } from './exercise88/exercise88-product-details/exercise88-product-details.component';
import { Exercise88ProductListComponent } from './exercise88/exercise88-product-list/exercise88-product-list.component';
import { Exercise89CategoryListComponent } from './exercise89/exercise89-category-list/exercise89-category-list.component';
import { Exercise90Component } from './exercise90/exercise90.component';
import { Exercise91Component } from './exercise91/exercise91.component';
import { Exercise92Component } from './exercise92/exercise92.component';
import { Exercise93Component } from './exercise93/exercise93.component';
import { Exercise95Component } from './exercise95/exercise95.component';

// *INFO: Config for exercise 94
const routes: Routes = [
  {
    path: 'exercise-86',
    component: Exercise86Component,
  },
  {
    path: 'exercise-87',
    component: Exercise87Component,
  },
  {
    path: 'exercise-88/products',
    component: Exercise88ProductListComponent,
  },
  {
    path: 'exercise-88/products/:id',
    component: Exercise88ProductDetailsComponent,
  },
  {
    path: 'exercise-89',
    component: Exercise89CategoryListComponent,
  },
  {
    path: 'exercise-90',
    component: Exercise90Component,
  },
  {
    path: 'exercise-91',
    component: Exercise91Component,
  },
  {
    path: 'exercise-92',
    component: Exercise92Component,
  },
  {
    path: 'exercise-93',
    component: Exercise93Component,
  },
  {
    path: '**',
    component: Exercise95Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
