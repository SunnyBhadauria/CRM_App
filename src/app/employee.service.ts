import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _httpService: Http) {

  }

getAllemployees(): Observable<employee[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/employee")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getemployeeById(employeeId: string): Observable<employee>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/employee/"+ employeeId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addemployee(employee: employee)
{

let body = JSON.parse(JSON.stringify(employee));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(employee.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/employee/" + employee.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/employee/" ,body,options);
 
 }

}

deleteemployee(employeeId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/employee/" + employeeId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
