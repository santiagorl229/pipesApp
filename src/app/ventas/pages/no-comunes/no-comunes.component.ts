import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
  //I18nSelect
  nombre: string ='Susana';
  genero: string ='femenino';
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes: string[]= ['Maria','Hernando', 'Eduardo','Roberto'];
  clientesMapa ={
    '=0': 'No tenemos a ningun cliente esperando ',
    '=1': 'Tenemos a ningun cliente esperando ',
    'other': 'Tenemos # clientes esperando'
  }
  cambiarCliente(){
      this.nombre = 'Melissa';
      this.genero = 'Fenenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }
  //keyValue Pipe
  persona={
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }
  heroes =[
    {
      nombre: "Superman",
      vuela: false
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Batman",
      vuela: false
    },
    {
      nombre: "Hulk",
      vuela: true
    }
  ] 

  //Async Pipe
  miObservable = interval(1000);
  valorPromesa= new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3000);
  });
}
