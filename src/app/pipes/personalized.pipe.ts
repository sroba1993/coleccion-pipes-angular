import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalized'
})
export class PersonalizedPipe implements PipeTransform {

  transform(value: string, isAllCapitalized: boolean = true): string {
    value = value.toLocaleLowerCase();
    let names = value.split(' ');

    if(isAllCapitalized) {
      names = names.map( name => {
        return name[0].toUpperCase() + name.substr(1);
      });
      return names.join(' ');
    }

    names[0] = names[0][0].toUpperCase() + names[0].substr(1);
    return names.join(' ');
  }

}
