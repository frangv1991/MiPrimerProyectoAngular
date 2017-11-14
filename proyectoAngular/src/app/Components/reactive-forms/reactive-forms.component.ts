import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Employee } from '../../Model/employee';
import { UserProviderService } from '../../Services/user-provider.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  jobs: Array<string>;
  employee: Employee;
  employeeForm: FormGroup;
  
  constructor(private userProvider: UserProviderService) {
    this.jobs = ['Project Manager', 'Programmer', 'Designer'];
    this.employee = this.userProvider.sessionUser();
  }

  ngOnInit() {
    
    this.employeeForm = new FormGroup({
      name: new FormControl(this.employee.name, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.employee.email, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      age : new FormControl(),
      job : new FormControl(),
      isActive : new FormControl()
    });
  }

}
