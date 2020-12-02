import {Component, OnInit, Output} from '@angular/core';
import {CreateItem} from '../../model/create-item';
import {ItemService} from '../../services/item.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  title: string = 'Create';
  maxChars: number = 255;
  defaultValueItem:string="";
  defaultValueDescription:string="";
  defaultValuePrice:number;
  defaultValueStock:number;


  constructor(private itemService: ItemService,
              private router: Router,
              private location:Location) {
  }

  ngOnInit(): void {
  }


  createItem(name: string, description: string, amountOfStock: string, price: string): void {
    let newItem = new CreateItem(name, description, +amountOfStock, +price);
    this.itemService.createItem(newItem).subscribe(item => this.router.navigate([`items/detail/${item.id}`]));

  }

  goBack():void {
    this.location.back();
  }


}
