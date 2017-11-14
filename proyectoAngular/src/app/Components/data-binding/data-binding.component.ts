import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  title1: string = "Interpolación";
  description1: string = "Ejemplo de data-binding por interpolación";
  
  title2: string = "Property Binding";
  description2: string = "Ejemplo de Property Binding";
  user1: any = {
    name: "<strong>Ricardo Fernández</strong>",
    email: "ricfer@gmail.com"
  };
  
  title3: string = "Event Binding";
  description3: string = "Ejemplo de Event Binding";
  counter: number = 0;
  sumAction(): void{
    this.counter++;
  };
  
  title4: string = "Two-way Binding";
  description4: string = "Ejemplo de Two-way Binding";
  content: string = "Escribe aquí...";
  
  constructor() { }

  ngOnInit() {
  }

}
