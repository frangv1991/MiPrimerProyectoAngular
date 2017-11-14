import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee';

@Injectable()
export class UserProviderService {
  
  private activeuser: Employee;
  
  constructor() {
    this.activeuser = new Employee(
      'Sofía López',
      'soflopez@gmail.com',
      'Programmer',
      32,
      true
    );
  }
  
  sessionUser(): Employee{
    return this.activeuser;
  }
  
  updateUser(user: Employee): void{
    this.activeuser = user;
  }

}
