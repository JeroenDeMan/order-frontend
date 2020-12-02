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
  title: string = "Item";
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
      this.title += ` ${this.item.id}`;
    });
  }

  goBack():void {
    this.location.back();
  }

  updateItem():void{
    this.itemChangeable = !this.itemChangeable;
  }

  getColor():string {
    if(this.itemChangeable) return "green";
    return "lightblue";
  }
}
