import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit, OnDestroy {
  
  params: any;
  
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
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  goToPipes(){
    this.router.navigate(["/pipes"]);
  }
  
  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(
      arg1 => {
        console.log(arg1);
      }
    );
  }
  
  ngOnDestroy(){
    this.params.unsubscribe();
  }

}
