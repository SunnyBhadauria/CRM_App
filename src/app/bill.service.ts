
import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { bill } from './bill/bill';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor( private _httpService: Http) {

  }

getAllbills(): Observable<bill[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/bill")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getbillById(billId: string): Observable<bill>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/bill/"+ billId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addbill(bill: bill)
{

let body = JSON.parse(JSON.stringify(bill));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(bill.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/bill/" + bill.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/bill" ,body,options);
 
 }

}

deletebill(billId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/bill/" + billId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
