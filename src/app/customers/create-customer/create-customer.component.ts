import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  title:string = "Create new customer";
  countries:string[] = ["Belgium", "France", "Germany"]

  defaultValueFirstName:string;
  defaultValueLastName:string;
  defaultValueLocalPart:string;
  defaultValueDomainPart:string;
  defaultValueLocalCode:number;
  defaultValuePhoneNumber:number;
  defaultValueStreet:string;
  defaultValueHouseNumber:string;

  constructor() { }

  ngOnInit(): void {
  }

  resetForm() {
    this.defaultValueFirstName = "";
    this.defaultValueLastName = "";
    this.defaultValueLocalPart = "";
    this.defaultValueDomainPart = "";
    this.defaultValueLocalCode = null;
    this.defaultValuePhoneNumber = null;
    this.defaultValueStreet = "";
    this.defaultValueHouseNumber = "";
  }

}
