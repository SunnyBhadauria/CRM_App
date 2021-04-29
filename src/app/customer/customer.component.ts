import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { product } from '../product/product';
import { customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customers: customer[];
  statusMessage: string;
  customer = new customer();
 

  constructor(private _customerservice: CustomerService , private _router: Router) { }

  ngOnInit(): void {

    this.getcustomers();
  }

  getcustomers(): void
  {
      this._customerservice.getAllCustomers()
      .subscribe((customerData) => this.customers = customerData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );

  }


  addcustomer(): void{

        this._customerservice.addcustomer(this.customer)
        .subscribe((response) => {console.log(response); this.getcustomers(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );

     this.navigate()
  }

private  reset()
{
this.customer.id = null;
this.customer.custName= null;
this.customer.custMob= null;
this.customer.custCountary= null;
this.customer.custcity= null;
this.customer.custpincode= null;
this.customer.giftVoucher= null;



}

deletecustomer(customerId: string)
{
  console.log("inside the deletecustomer()::::customer id::::"+customerId);
  this._customerservice.deletecustomer(customerId)
   .subscribe((response) => {console.log(response); this.getcustomers(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deletecustomer():::::::');
}


getcustomer(customerId: string)
{

this._customerservice.getCustomerById(customerId)
.subscribe((customerData) => {this.customer = customerData; this.getcustomers();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}


navigate()
{
  this._router.navigate(['/addProduct']);
}

}
