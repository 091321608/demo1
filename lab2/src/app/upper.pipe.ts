import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let res = value[0].toUpperCase();
    res += value.substring(1);
    return res;
  }

}
