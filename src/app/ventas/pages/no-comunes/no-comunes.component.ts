import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {
  nombre: string ='Susana';
  genero: string ='femenino';
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
}
