import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tableData: any, search: any): any {
    
    if(search)
    {
       return tableData.filter(row =>{

         return(row.custMob.toLowerCase().includes(search.toLowerCase())
         || row.custcity.toLowerCase().includes(search.toLowerCase()));
       
       });
                
   
       
   }
   
   return tableData;
 }

}
