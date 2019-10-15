import {OnInit, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    console.log('value', value);
    console.log('args', args );
    return Math.pow(value, args[0]);
  }

}
