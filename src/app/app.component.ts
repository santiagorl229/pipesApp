import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private primeNgConfig: PrimeNGConfig){}
   ngOnInit() {
    this.primeNgConfig.ripple = true;
   }
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}

  // nombre: string = 'Fernando';
  // valor: number = 10000;
  // objJson ={
  //     nombre: "Hola bebe"
  // }

  // mostrarNombre(){
  //   console.log(this.nombre);
  // }

