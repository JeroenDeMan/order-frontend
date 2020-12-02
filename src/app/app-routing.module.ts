import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemComponent} from './Items/item/item.component';
import {CustomerComponent} from './customers/customer-overview/customer.component';
import {CreateItemComponent} from './Items/create-item/create-item.component';
import {ItemDetailComponent} from './Items/item-detail/item-detail.component';
import {CreateCustomerComponent} from './customers/create-customer/create-customer.component';

const routes: Routes = [
  {path:" ", redirectTo:"items", pathMatch:"full"},
  {path:"items", component:ItemComponent},
  {path:"items/create", component:CreateItemComponent},
  {path:"items/detail/:id", component:ItemDetailComponent},
  {path:"customers", component:CustomerComponent},
  {path:"customers/create", component:CreateCustomerComponent},
  {path:"**", redirectTo:"items", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
