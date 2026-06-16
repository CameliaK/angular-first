import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US');
  
  transform(value: any, ...args: unknown[]): unknown {
    // if(value == '' || value == null || value == undefined){
    //   return 'N/A'
    // }else{
    //   return value ? '+52 ' + value : value;

    // }

    return this.DatePipe.transform(value, 'MM/yyyy');
  }
}
