import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search_multiline'
})

export class AutocompleteMultilinePipe<T> implements PipeTransform {
  transform(list: any[], filter: string): any {
    if (!list) {
      return [];
    }
    if (!filter) {
      return list;
    }
    filter = filter.toLowerCase();
    return list.filter(item => {
      return item.value1.toLowerCase().includes(filter.toLowerCase()) ||
        item.value2.toLowerCase().includes(filter.toLowerCase());
    });
  }
}