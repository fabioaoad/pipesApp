import { Component } from '@angular/core';
import { interval } from 'rxjs';
//import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {



  // INICIO i18nSelect
  nombre: string = 'Fabio';
  genero: string = 'masculino';


  otroNombre: string = 'Maria';
  otroGenero: string = 'femenino';


  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  // FIN i18nSelect





  // INICIO i18nPlural

   //clientes : string [] = [];
  //clientes : string [] = ['Maria'];
  //clientes : string [] = ['Maria','Fabio'];
  clientes : string [] = ['Maria','Fabio','Luis','Carlos','Martin'];

  clientesMapa = { 
    
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes  esperando.',
    'other': 'tenemos # clientes esperando'

  }  
    // FIN i18nPlural





cambiarCliente(){
  
  this.nombre = 'Virginia';
  this.genero = 'femenino';
  console.log(this.nombre);

  this.otroNombre = 'Pedro';
  this.otroGenero = 'masculino';
  console.log(this.otroNombre);

}


borrarCliente(){

this.clientes.pop();
console.log(this.clientes);

}



//KeyValue Pipe
persona = {
  nombre: 'Fabio',
  edad: 26,
  direccion: 'Cordoba, Argentina'
}



//JsonPipe

heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]



//Async Pipe
//miObservable = interval(2000).pipe( tap ( () => console.log('interval')) ); // 0,1,2,3,4,5,.....,1000
miObservable = interval(2000); // 0,1,2,3,4,5,.....,1000



valorPromesa = new Promise( (resolve, reject) => {
  setTimeout( () => {
    resolve( 'Tenemos data de promesa' );
  }, 3500);
});


}
