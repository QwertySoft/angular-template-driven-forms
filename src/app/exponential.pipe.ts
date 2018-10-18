import { Pipe, PipeTransform } from '@angular/core';

/**
 * Uso: valor | exponential: exponente
 * Ejemplo: {{ 10 | exponential: 2 }}
 */
@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(number: any, exponent: any): any {
    // Si lo que recibimos como numero no es un numero, mostrabmos blanco
    if (isNaN(number)) {
      return '';
    }
    // Elevamos el numero al exponente. Si este ultimo no es un numero, el valor por defecto es 1
    return Math.pow(number, isNaN(exponent) ? 1 : exponent);
  }

}
