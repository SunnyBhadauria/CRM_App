import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

 
  employees: employee[];
  statusMessage: string;
  employee = new employee();

  constructor(private _employeeservice: EmployeeService , private _router: Router) { }

  ngOnInit(): void {
    this.getemployees();
  }

  getemployees(): void
  {
      this._employeeservice.getAllemployees()
      .subscribe((employeeData) => this.employees = employeeData,
      (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
      }
      );

  }


  addemployee(): void{

        this._employeeservice.addemployee(this.employee)
        .subscribe((response) => {console.log(response); this.getemployees(); this.reset();},
        (error) => {
          console.log(error);
          this.statusMessage = 'Problem With service. Please try again later! ';
                }
        );
  }

private  reset()
{
this.employee.id = null;
//this.employee.title= null;
//this.employee.author = null;


}

deleteemployee(employeeId: string)
{
  console.log("inside the deleteemployee()::::employee id::::"+employeeId);
  this._employeeservice.deleteemployee(employeeId)
   .subscribe((response) => {console.log(response); this.getemployees(); },
   (error) => {
    console.log(error);
    this.statusMessage = 'Problem With service. Please try again later! ';
      }
   );
   this.reset();
   console.log('end of deleteemployee():::::::');
}


getemployee(employeeId: string)
{

this._employeeservice.getemployeeById(employeeId)
.subscribe((employeeData) => {this.employee = employeeData; this.getemployees();}),
(error) => {
  console.log(error);
  this.statusMessage = 'Problem With service. Please try again later! ';
    };
 
 this.reset();


}


}
