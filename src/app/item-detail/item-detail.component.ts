import {Component, OnInit} from '@angular/core';
import {Item} from '../model/item';
import {ItemService} from '../services/item.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  defaultTitle:string = "Item"
  title: string;
  maxChars: number = 255;
  createItemForm: FormGroup;
  itemChangeable:boolean =false;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getItem();

  }

  getItem():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItemById(id).subscribe(item => {
      this.item = item;
      this.title = `${this.defaultTitle} ${this.item.id}`;
    });
  }

  goBack():void {
    this.itemChangeable = false
    this.getItem();
  }

  updateItem(name:string, description:string, price:number, stock:number):void{
    if(!this.itemChangeable) {
      this.itemChangeable = !this.itemChangeable;
    }
    else {
      this.item.name = name;
      this.item.description = description;
      this.item.price = price;
      this.item.amountOfStock = stock;

      this.itemChangeable = !this.itemChangeable;
      this.itemService.updateItem(this.item).subscribe(item => this.item = item);
    }

  }

  getColor():string {
    if(this.itemChangeable) return "green";
    return "lightblue";
  }
}
