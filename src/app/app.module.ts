import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import {HttpClientModule} from '@angular/common/http';
import {ConvertToSpacesPipe} from './pipe/convert-to-spaces-pipe';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import { CreateItemComponent } from './create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ConvertToSpacesPipe,
    CustomerComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
