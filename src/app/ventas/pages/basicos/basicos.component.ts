import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

   nombreLower   : string = 'fabio';
   nombreUpper   : string = 'FABIO';
   nombreCompleto: string = 'FaBiO MarTIn aOaD';



   fecha: Date = new Date(); //fecha actual 


}
