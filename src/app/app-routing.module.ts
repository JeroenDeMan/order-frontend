import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './item/item.component';
import {CustomerComponent} from './customer/customer.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {ItemDetailComponent} from './item-detail/item-detail.component';

const routes: Routes = [
  {path:" ", redirectTo:"items", pathMatch:"full"},
  {path:"items", component:ItemComponent},
  {path:"items/create", component:CreateItemComponent},
  {path:"items/detail/:id", component:ItemDetailComponent},
  {path:"customers", component:CustomerComponent},
  {path:"**", redirectTo:"items", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
