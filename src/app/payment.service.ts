import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { payment } from './payment/payment';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private _httpService: Http) {

  }

getAllpayments(): Observable<payment[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/payment")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getpaymentById(paymentId: string): Observable<payment>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/payment/"+ paymentId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addpayment(payment: payment)
{

let body = JSON.parse(JSON.stringify(payment));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(payment.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/payment/" + payment.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/payment" ,body,options);
 
 }

}

deletepayment(paymentId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/payment/" + paymentId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
