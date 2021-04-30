import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from '../employee/employee';
import { StoreService } from '../store.service';
import { store } from './store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  stores: store[];
  statusMessage: string;
  store = new store();

  constructor(private _storeservice: StoreService , private _router: Router) { }

  ngOnInit(): void {
    this.getstores();
  }

  getstores(): void
  {
      this._storeservice.getAllstores()
      .subscribe((storeData) => this.stores = storeData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );

  }


  addstore(): void{

        this._storeservice.addstore(this.store)
        .subscribe((response) => {console.log(response); this.getstores(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );

        this.navigate();
  }

private  reset()
{
this.store.id = null;
this.store.storeCity = null;
this.store.storeName = null;
this.store.storeCountry = null;
this.store.storePinCode = null;



}

deletestore(storeId: string)
{
  console.log("inside the deletestore()::::store id::::"+storeId);
  this._storeservice.deletestore(storeId)
   .subscribe((response) => {console.log(response); this.getstores(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deletestore():::::::');
}


getstore(storeId: string)
{

this._storeservice.getstoreById(storeId)
.subscribe((storeData) => {this.store = storeData; this.getstores();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}

navigate()
{
  this._router.navigate(['/addEmployee']);
}
}
