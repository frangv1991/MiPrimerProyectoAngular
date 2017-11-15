import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Employee } from '../../Model/employee';
import { UserProviderService } from '../../Services/user-provider.service';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';

const API_END_POINT: string = "https://curso-e91f3.firebaseio.com/Employee";

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  
  jobs: Array<string>;
  employee: Employee;
  employeeForm: FormGroup;
  users: Array<any>;
  updateSubscription?: Subscription = null;
  
  
  
  
  
  constructor(private userProvider: UserProviderService, private http: Http) {
    this.jobs = ['Project Manager', 'Programmer', 'Designer'];
    this.employee = new Employee();
  }

  
  
  
  
  
  ngOnInit() {
    
    this.users = [];
    this.loadAllUsers();
    
    this.employeeForm = new FormGroup({
      name: new FormControl(this.employee.name, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.employee.email, [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      age : new FormControl(),
      job : new FormControl(),
      isActive : new FormControl(),
      id: new FormControl(),
      valoration: new FormControl()
    });
    
    this.employeeForm.valueChanges.subscribe(
      value => {
        if(this.employeeForm.invalid){
          return;
        }
        
        this.userProvider.updateUser(value);
        
        // Si estamos editando y se ha modificado algún dato
        if(this.employee.id != null && this.employeeForm.dirty){
          this.updateUser();
        }
      }
    );
    
  }
  
  
  
  
  
  
  
  // Carga todos los usuarios
  loadAllUsers(): void{
    
    this.http.get(API_END_POINT + '.json').subscribe(
      
      // Calback de ÉXITO
      response => {
        let data = response.json();
        
        // Reseteamos el array de usuarios
        this.users = [];
        
        // Recorremos el objeto devuelto para el formato adecuado
        for(let key in data){
          this.users.push(
            new Employee(
              data[key].name,
              data[key].email,
              data[key].job,
              data[key].age,
              data[key].isActive,
              data[key].valoration,
              key
            )
          );
        }
      },
      
      // Callback de ERROR
      error => console.log("Hubo un error en loadAllUsers() " + error),
      
      // Callback final
      () => console.log("Fin petición loadAllUsers()")
    );
  }
  
  
  
  
  
  
  
  // Crea un nuevo usuario
  createUser(): void{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.userProvider.sessionUser());
    
    this.http.post(API_END_POINT + '.json', body, options).subscribe(
      // Callback de ÉXITO
      response => {
        console.log("El usuario se creó correctamente");
        
        // Resetea el modelo y el formulario
        this.employee = new Employee();
        this.employeeForm.reset();
        
        // Recargamos listado de usuarios
        this.loadAllUsers();
      },
      
      // Callback de ERROR
      error => {
        console.log("Hubo un error en createUser(): " + error);
      },
      
      // Callback de finalización (se eecuta después de los callbacks de éxito o error)
      () => {
        console.log("Terminó la petición createUser()");
      }
    );
  }
  
  
  
  
  
  
  // Elimina un usuario
  removeUser(user): void{
    this.http.delete(API_END_POINT + '/' + user.id + '.json').subscribe(
      
      // Callback de ÉXITO
      response => {
        // Recargamos listado de usuarios
        this.loadAllUsers();
        
        // Resetea el modelo y el formulario
        this.employee = new Employee();
        this.employeeForm.reset();
        
        console.log("El usuario se borró correctamente.");
      },
      
      // Callback de ERROR
      error => console.log("El usuario no se puedo borrar: " + error)
    );
  }
  
  
  
  
  
  
  
  
  // Carga usuario para editarlo
  loadUser(user: Employee): void{
    this.employee = user;
    
    if(!user.isActive){
      user.isActive = false;
    }
    
    this.employeeForm.setValue(user);
  }
  
  
  
  
  
  
  // Actualiza un usuario
  updateUser(): void{
    
    // Si hay una suscripción previa y no está cerrada la cancelamos antes de volver a suscribirnos
    if(this.updateSubscription != null && !this.updateSubscription.closed){
      this.updateSubscription.unsubscribe();
    }
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(this.userProvider.sessionUser());
    
    this.updateSubscription = this.http.put(API_END_POINT + '/' + this.employee.id + '.json', body, options).subscribe(
      
      //Callback de ÉXITO
      response => {
        this.employee = response.json();
        
        // Recarga listado de usuarios
        this.loadAllUsers();
      }
    );
  }

}
