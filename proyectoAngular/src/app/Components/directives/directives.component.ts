import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  activeColor: string = "azul";
  changeColor(color: string): void{
    this.activeColor = color;
  }
  
  //
  
  colorList: Array<string> = ['Azul', 'Verde', 'Amarillo', 'Rojo', 'Naranja'];
  
  //
  
  userIsLogin: boolean = false;
  changeUserStatus(): void{
    this.userIsLogin = !this.userIsLogin;
  }
  
  //
  
  alertStatus: string;
  changeAlertStatus(status: string): void{
    this.alertStatus = status;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
