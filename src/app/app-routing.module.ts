import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillComponent } from './bill/bill.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { CumulativePointComponent } from './cumulative-point/cumulative-point.component';
import { CumulativepointListComponent } from './cumulativepoint-list/cumulativepoint-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [

  {
    path: 'addCustomer' , component: CustomerComponent
  },

 {
    path: 'addStore' , component: StoreComponent
  },
  {
    path: 'addHome' , component: HomeComponent
  },
  {
    path: 'addProduct' , component: ProductComponent
  },
  {
    path: 'addEmployee' , component: EmployeeComponent 
  },
  {
    path: 'addCard' , component: CardComponent
  },
  {
    path: 'addPayment' , component: PaymentComponent
  },
  {
    path: 'addCumulativePoint' , component: CumulativePointComponent
  },
  {
    path: 'addBill' , component: BillComponent
  },


  {
    path: 'displayCustomer' , component: CustomerListComponent
  },

 {
    path: 'displayStore' , component: StoreListComponent
  },
  {
    path: 'displayProduct' , component: ProductListComponent
  },
  {
    path: 'displayEmployee' , component: EmployeeListComponent
  },
  {
    path: 'displayCard' , component: CardListComponent
  },
  {
    path: 'displayPayment' , component: PaymentListComponent
  },
  {
    path: 'displayCumulativePoint' , component: CumulativepointListComponent
  },
  {
    path: 'displayBill' , component: BillListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
