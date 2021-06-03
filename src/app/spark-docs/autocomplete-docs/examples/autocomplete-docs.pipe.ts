import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class AutocompletePipe<T> implements PipeTransform {
    transform(list: any[], filter: string): any {
        if (!list) {
            return [];
        }
        if (!filter) {
            return list;
        }
        filter = filter.toLowerCase();
        return list.filter(item => {
            return item.value.toLowerCase().includes(filter.toLowerCase());
        });
    }
}