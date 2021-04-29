import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';
import { cumulativepoint } from '../cumulative-point/cumulativepoint';
import { customer } from '../customer/customer';
import { card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  cards: card[];
 
  statusMessage: string;
  
  card = new card();
  
  customer = new customer();
 
  cumulativePoint = new cumulativepoint();

  constructor(private _cardservice: CardService , private _router: Router) { }

  ngOnInit(): void {
   
    this.card.cumulativePoint=this.cumulativePoint;
    this.card.customer=this.customer;
   
    this.getcards();
  }

  getcards(): void
  {
      this._cardservice.getAllcards()
      .subscribe((cardData) => this.cards = cardData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );

  }


  addcard(): void{

        this._cardservice.addcard(this.card)
        .subscribe((response) => {console.log(response); this.getcards(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );
  }

private  reset()
{
this.card.id = null;
//this.card.title= null;
//this.card.author = null;


}

deletecard(cardId: string)
{
  console.log("inside the deletecard()::::card id::::"+cardId);
  this._cardservice.deletecard(cardId)
   .subscribe((response) => {console.log(response); this.getcards(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deletecard():::::::');
}


getcard(cardId: string)
{

this._cardservice.getcardById(cardId)
.subscribe((cardData) => {this.card = cardData; this.getcards();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}


}
