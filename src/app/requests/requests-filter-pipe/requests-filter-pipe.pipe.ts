import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'requestsFilter'
})
export class RequestsFilterPipe implements PipeTransform {
  transform(items: any[], searchCriteria: string, matchOn: string): any[] {
    if (!items) return [];
    if (!searchCriteria) return items;

    searchCriteria = searchCriteria.toLowerCase();

    return items.filter(item => {
      return item[matchOn]
        .toLowerCase()
        .includes(searchCriteria)
    });
  }
}