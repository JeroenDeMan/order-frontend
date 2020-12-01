import { Component, OnInit } from '@angular/core';
import {CreateItem} from '../model/create-item';
import {ItemService} from '../services/item.service';
import {Router} from '@angular/router';
import {Item} from '../model/item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  title:string = "Create";

  constructor(private itemService:ItemService,
              private router:Router) { }

  ngOnInit(): void {
  }

  createItem(name:string,description:string ,amountOfStock:number, price:number):void {
    let responseItem:Item;
    let newItem = new CreateItem(name,description ,amountOfStock, price);
     this.itemService.createItem(newItem).subscribe(item => responseItem = item);
  }

}
