import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { product } from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _httpService: Http) {

  }

getAllproducts(): Observable<product[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/product")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getproductById(productId: string): Observable<product>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/product/"+ productId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addproduct(product: product)
{

let body = JSON.parse(JSON.stringify(product));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(product.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/product/" + product.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/product" ,body,options);
 
 }

}

deleteproduct(productId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/product/" + productId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
