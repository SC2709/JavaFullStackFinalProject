import { Component } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent //implements OnInit//
{

  constructor(
    private employeeService: EmployeeService,
    private router: Router,

  ) {

  }
}





