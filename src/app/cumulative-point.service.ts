import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { cumulativepoint } from './cumulative-point/cumulativepoint';

@Injectable({
  providedIn: 'root'
})
export class CumulativePointService {

  constructor( private _httpService: Http) {

  }

getAllcumulativepoints(): Observable<cumulativepoint[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/cumulativePoint")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}


calculatecumulativepointById(customerId: string): Observable<cumulativepoint>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/calculateCumulativeTotal/"+ customerId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}








getcumulativepointById(cumulativepointId: string): Observable<cumulativepoint>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/cumulativePoint/"+ cumulativepointId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addcumulativepoint(cumulativepoint: cumulativepoint)
{

let body = JSON.parse(JSON.stringify(cumulativepoint));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(cumulativepoint.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/cumulativePoint/" + cumulativepoint.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/cumulativePoint" ,body,options);
 
 }

}

deletecumulativepoint(cumulativepointId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/cumulativePoint/" + cumulativepointId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
