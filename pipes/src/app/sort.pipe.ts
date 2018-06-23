import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort(this.nameSort);
  }

  nameSort(a, b) {
    if (a.name > b.name) {
      return 1;
    }

    else if (a.name < b.name) {
      return -1;
    }

    return 0;
  }

}
