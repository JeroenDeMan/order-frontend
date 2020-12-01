import { Component, OnInit } from '@angular/core';
import {Item} from './item';
import {ItemService} from '../services/item.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title:string = "Items";
  _filter: string;

  get filter(): string {
    return this._filter
  }

  set filter(value:string) {
    this._filter = value;
    this.filteredItems = this.filter ? this.performFilter(this.filter) : this.items;
  }
  items:Item[];
  filteredItems:Item[];

  constructor(private itemService:ItemService) { }



  ngOnInit(): void {
    this.getItems();
    this.filteredItems=this.items;
  }

  getItems():void{
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.filteredItems=this.items;
    });
  }

  getColor(item:Item):string{
    switch (item.stockUrgency) {
      case "STOCK_HIGH": return "green";
      case "STOCK_MEDIUM": return "orange";
      case"STOCK_LOW":return "red";
    }
  }


  private performFilter(filterBy: string) : Item[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.items.filter((itemFilter:Item)=> itemFilter.name.toLocaleLowerCase().indexOf(filterBy)!== -1);
  }
}
