import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { store } from './store/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor( private _httpService: Http) {

  }

getAllstores(): Observable<store[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/store")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getstoreById(storeId: string): Observable<store>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/store/"+ storeId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addstore(store: store)
{

let body = JSON.parse(JSON.stringify(store));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(store.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/store/" + store.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/store" ,body,options);
 
 }

}

deletestore(storeId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/store/" + storeId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
