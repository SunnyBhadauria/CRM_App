import { customer } from "../customer/customer";
import { product } from "../product/product";

export class bill{
  
  id: number;
  billAmount:number;
  billDate:Date;
 customer:customer;
 product: product;


  constructor()
  {

    
  }  
}

