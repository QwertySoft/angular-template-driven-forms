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
    if (isNaN(number)) {
      return '';
    }
    return Math.pow(number, isNaN(exponent) ? 1 : exponent);
  }

}
