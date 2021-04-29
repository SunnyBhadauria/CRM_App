import { cumulativepoint } from "../cumulative-point/cumulativepoint";
import { customer } from "../customer/customer";

export class card{
    id: number;
  
    cardValidity:string;

    
    silverCardCumulativeTotal:number;
  
    goldCardCumulativeTotal:number;
	
	 cumulativePoint:cumulativepoint;
   
   customer: customer;

    constructor()
    {
  
      
    }  
  }
  
  