import {Item} from './item';

export class CreateItem implements Item{
  amountOfStock: number;
  id: string;
  name: string;
  price: number;
  stockUrgency: string;
  description:string

  constructor(name:string,description:string,amountOfStock:number, price:number ) {
    this.id = null;
    this.name = name;
    this.amountOfStock = amountOfStock;
    this.price =price;
    this.stockUrgency = "";
    this.description = description;
  }
}
