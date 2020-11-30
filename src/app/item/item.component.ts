import { Component, OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title:string = "Items";
  items:Item[];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems():void{
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  getColor(item:Item):string{
    switch (item.stockUrgency) {
      case "STOCK_HIGH": return "green";
      case "STOCK-MEDIUM": return "orange";
      case"STOCK_LOW":return "red";
    }
  }

}
