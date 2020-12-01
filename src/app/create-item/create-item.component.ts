import { Component, OnInit } from '@angular/core';
import {CreateItem} from '../model/create-item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  title:string = "Create";

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }

  createItem(name:string,description:string ,amountOfStock:number, price:number):void {
    let newItem = new CreateItem(name,description ,amountOfStock, price);
    this.itemService.createItem(newItem).subscribe();
  }

}
