import { Component, OnInit } from '@angular/core';

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

}
