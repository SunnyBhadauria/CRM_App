import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions} from  '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { card } from './card/card';
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor( private _httpService: Http) {

  }

getAllcards(): Observable<card[]>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/card")
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

getcardById(cardId: string): Observable<card>
{
 return this._httpService.get("http://localhost:9191/spring-mvc-restfull-crud-example/Card/"+ cardId)
 .map((response: Response) => response.json())
 .catch(this.handleError);
}

addcard(card: card)
{

let body = JSON.parse(JSON.stringify(card));

let headers = new Headers({ 'Content-Type': 'application/json' });

let options = new RequestOptions( { headers: headers});

 if(card.id)
 {
   return this._httpService.put("http://localhost:9191/spring-mvc-restfull-crud-example/card/" + card.id ,body,options);
 }
 else{
   return this._httpService.post("http://localhost:9191/spring-mvc-restfull-crud-example/Card" ,body,options);
 
 }

}

deletecard(cardId: string)
{
 return this._httpService.delete("http://localhost:9191/spring-mvc-restfull-crud-example/card/" + cardId);

}


private handleError(error: Response){

 return Observable.throw(error);
}
}
