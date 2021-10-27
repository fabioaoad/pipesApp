import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {
     
 transform( valor: boolean ):string{
  /* 
    if(valor){
        return 'Si Vuela';
    }else{
        return 'No Vuela'; 
    }
 */

    return ( valor )
        ? 'vuela'
        : 'no vuela';
 }

}