import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProd'
})
export class FilterProdPipe implements PipeTransform {

  transform(items: any[], searchtext: any): any[] {
    if(!items) return [];
    if(!searchtext) return items;
    searchtext = searchtext.toLowerCase();
return items.filter( it => {
      return it.includes(searchtext);
    });
   }
  }


