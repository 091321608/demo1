import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0] === '') { return value; }
    return value.filter ((item) => item.model.toLowerCase().indexOf( args[0].toLowerCase()) !== -1);

  }

}
