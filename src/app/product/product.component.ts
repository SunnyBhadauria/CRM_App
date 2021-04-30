import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  products: product[];
  statusMessage: string;
  product = new product();

  constructor(private _productservice: ProductService , private _router: Router) { }

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts(): void
  {
      this._productservice.getAllproducts()
      .subscribe((productData) => this.products = productData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );

  }


  addproduct(): void{

        this._productservice.addproduct(this.product)
        .subscribe((response) => {console.log(response); this.getproducts(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );
        this.navigate();
  }

private  reset()
{
this.product.id = null;
this.product.producttype= null;
this.product.productQuantity= null;
this.product.productMRP= null;

}

deleteproduct(productId: string)
{
  console.log("inside the deleteproduct()::::product id::::"+productId);
  this._productservice.deleteproduct(productId)
   .subscribe((response) => {console.log(response); this.getproducts(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deleteproduct():::::::');
}


getproduct(productId: string)
{

this._productservice.getproductById(productId)
.subscribe((productData) => {this.product = productData; this.getproducts();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}


navigate()
{
  this._router.navigate(['/addCard']);
}



}
