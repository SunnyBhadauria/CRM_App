import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { customer } from '../customer/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: customer[];
  statusMessage: string;
  customer = new customer();
  search: string;

  constructor(private _customerservice: CustomerService , private _router: Router) { }

  ngOnInit(): void {
    console.log("calling ngOnInit()::::");
    this.getcustomers();
  }

  getcustomers(): void
  {
    console.log("inside getcustomers()::::");
      this._customerservice.getAllCustomers()
      .subscribe((customerData) => this.customers = customerData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );
      console.log("end of getcustomers():::::");

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
  
  newPurchase()
  {
    // console.log("inside the deletecustomer()::::customer id::::"+customerId);
    // this._customerservice.deletecustomer(customerId)
    //  .subscribe((response) => {console.log(response); this.getcustomers(); },
    //  (error) => {
    //   console.log(error);
    //   this.statusMessage = 'Problem With service. Please try again later! ';
    //     }
    //  );
    //  this.reset();
    //  console.log('end of deletecustomer():::::::');
    this.navigateProduct();
  }
  
  
  getcustomer()
  {
  
  // this._customerservice.getCustomerById(customerId)
  // .subscribe((customerData) => {this.customer = customerData; this.getcustomers();}),
  // (error) => {
  //   console.log(error);
  //   this.statusMessage = 'Problem With service. Please try again later! ';
  //     };
   
  //  this.reset();
 
  this.navigate();
  }


  navigateProduct()
  {
    this._router.navigate(['/addProduct']);
  }
  navigate()
  {
    this._router.navigate(['/addCustomer']);
  }
}
