import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Fernando';
  valor: number = 10000;
  objJson ={
      nombre: "Hola bebe"
  }

  mostrarNombre(){
    console.log(this.nombre);
  }
}
