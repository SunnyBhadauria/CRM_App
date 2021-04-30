import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CardComponent } from './card/card.component';
import { CustomerComponent } from './customer/customer.component';
import { BillComponent } from './bill/bill.component';
import { ProductComponent } from './product/product.component';
import { PaymentComponent } from './payment/payment.component';
import { CumulativePointComponent } from './cumulative-point/cumulative-point.component';
import { StoreComponent } from './store/store.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CumulativepointListComponent } from './cumulativepoint-list/cumulativepoint-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { StoreListComponent } from './store-list/store-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDatepicker, NgbDropdownMenu, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateComponent } from './date/date.component';
import { PrintComponent } from './print/print.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CardComponent,
    CustomerComponent,
    BillComponent,
    ProductComponent,
    PaymentComponent,
    CumulativePointComponent,
    StoreComponent,
    CustomerListComponent,
    ProductListComponent,
    BillListComponent,
    PaymentListComponent,
    CumulativepointListComponent,
    CardListComponent,
    StoreListComponent,
    EmployeeListComponent,
    FilterPipe,
    DateComponent,
    PrintComponent,
    HomeComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
