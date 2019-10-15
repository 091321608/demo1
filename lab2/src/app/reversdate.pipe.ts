import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversdate'
})
export class ReversdatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const dat1 = value.split('-');
    let newDate = dat1[2] + '/' + dat1[1] + '/' + dat1[0];
    return newDate;
  }

}
