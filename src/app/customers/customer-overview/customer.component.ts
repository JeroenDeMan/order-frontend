import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[];

  constructor(
    private customerService:CustomerService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers():void{
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  navigateToCreate() {
    this.router.navigate(["customers/create"])
  }
}
