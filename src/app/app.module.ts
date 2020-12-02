import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './Items/item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {ConvertToSpacesPipe} from './pipe/convert-to-spaces-pipe';
import { CustomerComponent } from './customers/customer-overview/customer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateItemComponent } from './Items/create-item/create-item.component';
import { ItemDetailComponent } from './Items/item-detail/item-detail.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ConvertToSpacesPipe,
    CustomerComponent,
    CreateItemComponent,
    ItemDetailComponent,
    CreateCustomerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
