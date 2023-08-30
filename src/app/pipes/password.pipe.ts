import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, isEnable: boolean = false): unknown {
    return isEnable ? value : '*'.repeat(value.length);
  }

}
