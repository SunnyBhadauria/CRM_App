import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { customer } from './customer/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private _httpService: Http) {

  }

getAllCustomers(): Observable<customer[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/customer")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getCustomerById(customerId: string): Observable<customer>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/customer/"+ customerId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addcustomer(customer: customer)
{

let body = JSON.parse(JSON.stringify(customer));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(customer.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/customer/" + customer.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/customer/" ,body,options);
 
 }

}

deletecustomer(customerId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/customer/" + customerId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
