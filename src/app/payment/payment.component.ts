import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from '../bill.service';
import { bill } from '../bill/bill';
import { PaymentService } from '../payment.service';
import { payment } from './payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 
  payments: payment[];
  statusMessage: string;
  payment = new payment();
  bill = new bill();
billnew = new bill();
  constructor(private _paymentservice: PaymentService ,private _billservice: BillService ,
     private _router: Router) {
  // this.payment.amount=1000-12;

  }

  ngOnInit(): void {
   this.payment.bill=this.bill;
   this.getpayments();
  
 //  this.payment.amount=1000-this.payment.discount;
  // this.payment.amount=this.bill.billAmount-this.payment.discount;
  }

  getpayments(): void
  {
      this._paymentservice.getAllpayments()
      .subscribe((paymentData) => this.payments = paymentData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );


//this.getbill(this.bill.id);

  }
  calculateDiscount(billId: string)
  {

this._billservice.getbillById(billId)
.subscribe((billData) => {this.billnew = billData; }),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 // this.payment.amount = ((this.billnew.billAmount) - (this.payment.discount));
  //this.payment.amount = ((this.billnew.billAmount) - (this.payment.discount));
  this.payment.amount =   ((this.billnew.billAmount)  -  ((this.billnew.billAmount)* ((this.payment.discount)/(100))))
}


  addpayment(): void{

        this._paymentservice.addpayment(this.payment)
        .subscribe((response) => {console.log(response); this.getpayments(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );
     //   this.payment.amount=1000-1;
      this.navigate();
  }

private  reset()
{
this.payment.id = null;
this.payment.modeOfPay=null;
this.payment.discount = null;
this.payment.amount = null;

//this.payment.title= null;
//this.payment.author = null;


}

deletepayment(paymentId: string)
{
  console.log("inside the deletepayment()::::payment id::::"+paymentId);
  this._paymentservice.deletepayment(paymentId)
   .subscribe((response) => {console.log(response); this.getpayments(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deletepayment():::::::');
}


getpayment(paymentId: string)
{

this._paymentservice.getpaymentById(paymentId)
.subscribe((paymentData) => {this.payment = paymentData; this.getpayments();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}

navigate()
{
  this._router.navigate(['/addCumulativePoint']);
}
}
