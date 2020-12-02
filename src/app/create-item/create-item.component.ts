import {Component, OnInit, Output} from '@angular/core';
import {CreateItem} from '../model/create-item';
import {ItemService} from '../services/item.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

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
              private router: Router) {
  }

  ngOnInit(): void {
  }


  createItem(name: string, description: string, amountOfStock: number, price: number): void {
    let newItem = new CreateItem(name, description, amountOfStock, price);
    console.log(newItem);
    this.itemService.createItem(newItem).subscribe(item => this.router.navigate([`items/detail/${item.id}`]));

  }



  resetForm() {
    this.defaultValueItem = "";
    this.defaultValueDescription = "";
    this.defaultValuePrice = 0;
    this.defaultValueStock = 0;
  }
}
