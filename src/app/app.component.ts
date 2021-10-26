import { Component, OnInit } from '@angular/core';

//esto es un servicio de primeNg. 
//Lo uso para no comunes en el i18nSelect e i18nPlural como efecto al hacer click
import { PrimeNGConfig } from 'primeng/api'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
constructor(private primengConfig: PrimeNGConfig) {}


ngOnInit() {
  this.primengConfig.ripple = true;
}



  nombre: string = 'fabiO aoAd';
  valor: number = 1000000;
  obj = {
    nombre: 'Fabio'
  }
  
  mostrarNombre(){
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
