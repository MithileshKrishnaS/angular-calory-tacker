import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'searcher'
})
export class SearcherPipe implements PipeTransform {

  transform(value: any ,searchstr:string){
    const food2=[];
    for(const food of value)
    {
      if(food['name']===searchstr)
      {
        food2.push(food);
      }
    }
    return food2;
  }

}
